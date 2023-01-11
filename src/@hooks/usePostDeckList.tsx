import useApiNotify from '@hooks/notify/useApiNotify';
import useBlockNotify from '@hooks/notify/useBlockNotify';
import keys from '@query/keys';
import { MutableRefObject, SyntheticEvent } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { postDeckApi } from 'src/@fetch';
import { deckStatusAtom } from 'src/@store/builder';
import { modalToggler } from 'src/@store/modal';

const usePostDeck = (ref: MutableRefObject<any>) => {
  const status = useRecoilValue(deckStatusAtom);
  const reset = useResetRecoilState(deckStatusAtom);
  const queryClient = useQueryClient();
  const toggler = useSetRecoilState(modalToggler);
  const apiNotify = useApiNotify();
  const blockNotify = useBlockNotify();

  const { mutate } = useMutation(postDeckApi, {
    onSuccess: () => {
      queryClient.invalidateQueries(keys.getDeckList);
      toggler('postDeck');
      apiNotify.postDeckSuccess();
      reset();
      // TODO : redirect deck page
    },
    onError: () => {
      queryClient.invalidateQueries(keys.getDeckList);
      toggler('postDeck');
      apiNotify.postDeckError();
      // TODO : redirect deck page
    },
  });

  const onClick = (e: SyntheticEvent) => {
    if (!(e.target instanceof HTMLButtonElement)) {
      return;
    }
    if (status.length < 12) {
      blockNotify.blockDeckAmount();
      return;
    }
    if (!ref.current?.value) {
      blockNotify.blockEmptyTitle();
      return;
    }
    const items = status.map(v => v.id);
    mutate({ items, title: ref.current?.value });
  };

  return [onClick];
};

export default usePostDeck;
