import { postDeckApi } from '@fetch/index';
import useApiNotify from '@hooks/notify/useApiNotify';
import useBlockNotify from '@hooks/notify/useBlockNotify';
import keys from '@query/keys';
import { useRouter } from 'next/router';
import { SyntheticEvent } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { deckStatusAtom } from 'src/@store/builder';
import { modalCloser } from 'src/@store/modal';

const usePostDeck = (title: string | null, description: string | null) => {
  const status = useRecoilValue(deckStatusAtom);
  const reset = useResetRecoilState(deckStatusAtom);
  const queryClient = useQueryClient();
  const close = useSetRecoilState(modalCloser);
  const apiNotify = useApiNotify();
  const blockNotify = useBlockNotify();
  const router = useRouter();

  const { mutate } = useMutation(postDeckApi, {
    onSuccess: data => {
      queryClient.invalidateQueries(keys.getDeckList);
      close('postDeck');
      apiNotify.postDeckSuccess();
      reset();
      router.push(`/deck/${data?.id}`);
    },
    onError: () => {
      queryClient.invalidateQueries(keys.getDeckList);
      close('postDeck');
      apiNotify.postDeckError();
      // TODO : redirect deck page
    },
  });

  const onClick = (e: SyntheticEvent) => {
    if (!(e.target instanceof HTMLButtonElement) && !(e.target instanceof HTMLSpanElement)) {
      return;
    }
    if (status.length < 12) {
      blockNotify.blockDeckAmount();
      return;
    }
    if (!title) {
      blockNotify.blockEmptyTitle();
      return;
    }
    const items = status.map(v => v.id);
    mutate({ items, title, description });
  };

  return [onClick];
};

export default usePostDeck;
