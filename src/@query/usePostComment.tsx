import { postCommentApi } from '@fetch/index';
import useApiNotify from '@hooks/notify/useApiNotify';
import keys from '@query/keys';
import useUser from '@query/useUser';
import { useRouter } from 'next/router';
import { SyntheticEvent } from 'react';
import { useMutation, useQueryClient } from 'react-query';

const usePostComment = ({ collectionId, recordId, content = '' }: { collectionId: string; recordId: string; content: string | null }): [() => void, (e: SyntheticEvent) => void, boolean] => {
  const queryClient = useQueryClient();
  const apiNotify = useApiNotify();
  const [user] = useUser();
  const router = useRouter();
  const { mutate, isSuccess } = useMutation(postCommentApi, {
    onSuccess: () => {
      queryClient.invalidateQueries(keys.getCommentList);
      apiNotify.postCommentSuccess();
    },
    onError: () => {
      queryClient.invalidateQueries(keys.getCommentList);
      apiNotify.postCommentError();
    },
  });

  const post = () => {
    mutate({ collectionId, recordId, content: content! });
  };

  const foucsTextArea = (e: SyntheticEvent) => {
    if (!(e.target instanceof HTMLTextAreaElement)) {
      return;
    }
    e.target.value = '';
    if (!!user === false) {
      router.push(`/login`);
    }
    return;
  };

  return [post, foucsTextArea, isSuccess];
};

export default usePostComment;
