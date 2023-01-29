import { delCommentApi } from '@fetch/index';
import useApiNotify from '@hooks/notify/useApiNotify';
import keys from '@query/keys';
import { SyntheticEvent } from 'react';
import { useMutation, useQueryClient } from 'react-query';

const useDeleteComment = (id: string) => {
  const queryClient = useQueryClient();
  const apiNotify = useApiNotify();
  const { mutate } = useMutation(delCommentApi, {
    onSuccess: () => {
      queryClient.invalidateQueries([keys.getCommentList]);
      apiNotify.delCommentSuccess();
    },
    onError: () => {
      queryClient.invalidateQueries([keys.getScoreList]);
      apiNotify.delCommentError();
    },
  });
  const onClick = (e: SyntheticEvent) => {
    const flag = confirm('이 댓글을 삭제할까요?');
    if (flag) {
      mutate(id);
    }
  };

  return [onClick];
};

export default useDeleteComment;
