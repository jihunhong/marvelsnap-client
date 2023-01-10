import useModalToggler from '@hooks/useModalToggler';
import keys from '@query/keys';
import { useRouter } from 'next/router';
import { SyntheticEvent } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { postDeckApi } from 'src/@fetch';
import { deckStatusAtom } from 'src/@store/builder';
import { modalToggler } from 'src/@store/modal';

const usePostDeck = () => {
  const status = useRecoilValue(deckStatusAtom);
  const queryClient = useQueryClient();
  const toggler = useSetRecoilState(modalToggler);
  const notify = () => toast.success('저장되었습니다!');
  const { mutate } = useMutation(postDeckApi, {
    onSuccess: () => {
      queryClient.invalidateQueries(keys.getDeckList);
      toggler('postDeck');
      notify();
      // TODO : redirect deck page
    },
    onError: () => {
      queryClient.invalidateQueries(keys.getDeckList);
      toggler('postDeck');
      notify();
      // TODO : redirect deck page
    },
  });

  const onClick = (e: SyntheticEvent) => {
    if (!(e.target instanceof HTMLButtonElement)) {
      return;
    }
    const cIds = status.map(v => v.id);
    mutate({ cIds });
  };

  return [onClick];
};

export default usePostDeck;
