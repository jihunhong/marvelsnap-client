import { postLikeApi } from '@fetch/index';
import useApiNotify from '@hooks/notify/useApiNotify';
import keys from '@query/keys';
import { AxiosError, AxiosResponse } from 'axios';
import { SyntheticEvent } from 'react';
import { useMutation, useQueryClient } from 'react-query';

const usePostLike = ({ collectionId, recordId }: { collectionId: string; recordId: string }) => {
  const queryClient = useQueryClient();
  const apiNotify = useApiNotify();
  const { mutate } = useMutation(postLikeApi, {
    onSuccess: () => {
      queryClient.invalidateQueries([keys.getLike, collectionId, recordId]);
      apiNotify.postLikeSuccess();
    },
    onError: (error: AxiosError) => {
      if (error?.response?.status === 409) apiNotify.postLikeDuplicate();
      else apiNotify.postLikeError();
    },
  });

  const onClick = (e: SyntheticEvent) => {
    if (!(e.target instanceof HTMLButtonElement) && !(e.target instanceof HTMLSpanElement)) {
      return;
    }
    mutate({ collectionId, recordId });
  };

  return [onClick];
};

export default usePostLike;
