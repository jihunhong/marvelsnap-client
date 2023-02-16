import { postCommentApi } from '@fetch/index';
import useApiNotify from '@hooks/notify/useApiNotify';
import useBlockNotify from '@hooks/notify/useBlockNotify';
import useNotify from '@hooks/notify/useNotify';
import keys from '@query/keys';
import useUser from '@query/useUser';
import { useRouter } from 'next/router';
import { SyntheticEvent } from 'react';
import { useMutation, useQueryClient } from 'react-query';

const usePostComment = ({ collectionId, recordId, content = '' }: { collectionId: string; recordId: string; content: string | null }): [() => void, (e: SyntheticEvent) => void, boolean] => {
  const queryClient = useQueryClient();
  const apiNotify = useApiNotify();
  const { loginAccessNotify } = useBlockNotify();
  const [user] = useUser();
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
    if (!!user === false) {
      return loginAccessNotify();
    }
    mutate({ collectionId, recordId, content: content! });
  };

  const foucsTextArea = (e: SyntheticEvent) => {
    if (!(e.target instanceof HTMLTextAreaElement)) {
      return;
    }
    if (!!user === false) {
      e.target.value = '';
      loginAccessNotify();
    }
    return;
  };

  return [post, foucsTextArea, isSuccess];
};

export default usePostComment;
