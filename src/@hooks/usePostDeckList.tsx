import keys from '@query/keys';
import { useRouter } from 'next/router';
import { SyntheticEvent } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useRecoilValue } from 'recoil';
import { postDeckApi } from 'src/@fetch';
import { deckStatusAtom } from 'src/@store/builder';

const usePostDeck = () => {
  const status = useRecoilValue(deckStatusAtom);
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate } = useMutation(postDeckApi, {
    onSuccess: () => {
      queryClient.invalidateQueries(keys.getDeckList);
      router.push('/');
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
