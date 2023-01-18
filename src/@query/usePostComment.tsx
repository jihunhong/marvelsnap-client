import { postCommentApi } from '@fetch/index';
import useApiNotify from '@hooks/notify/useApiNotify';
import keys from '@query/keys';
import { SyntheticEvent } from 'react';
import { useMutation, useQueryClient } from 'react-query';

const usePostComment = ({ collectionId, recordId, content }: { collectionId: string; recordId: string; content: string }) => {
  const queryClient = useQueryClient();
  const apiNotify = useApiNotify();
  const { mutate } = useMutation(postCommentApi, {
    onSuccess: () => {
      queryClient.invalidateQueries(keys.getCommentList);
      apiNotify.postCommentSuccess();
    },
    onError: () => {
      queryClient.invalidateQueries(keys.getCommentList);
      apiNotify.postCommentError();
    },
  });

  const handler = (e: SyntheticEvent) => {
    if (!(e.target instanceof HTMLButtonElement)) {
      return;
    }
    mutate({ collectionId, recordId, content });
  };

  return [handler];
};

export default usePostComment;
