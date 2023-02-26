import { postArticleApi } from '@fetch/index';
import useApiNotify from '@hooks/notify/useApiNotify';
import { useRouter } from 'next/router';
import { SyntheticEvent } from 'react';
import { useMutation } from 'react-query';

const usePostArticle = ({ title, summary, thumbnail, content }: Record<string, string>) => {
  const apiNotify = useApiNotify();
  const router = useRouter();

  const { mutate } = useMutation(postArticleApi, {
    onSuccess: data => {
      apiNotify.postDeckSuccess();
      router.push(`/article?id=${data?.id}`);
    },
    onError: () => {
      apiNotify.postDeckError();
    },
  });

  const onClick = (e: SyntheticEvent) => {
    if (!(e.target instanceof HTMLButtonElement) && !(e.target instanceof HTMLSpanElement)) {
      return;
    }
    mutate({ title, summary, thumbnail, content, writer: 'sako' });
  };

  return [onClick];
};

export default usePostArticle;
