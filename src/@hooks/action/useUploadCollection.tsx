import { postUserCollectionApi } from '@fetch/index';
import useApiNotify from '@hooks/notify/useApiNotify';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

const useUploadCollection = ref => {
  const router = useRouter();
  const apiNotify = useApiNotify();
  const { mutate } = useMutation(postUserCollectionApi, {
    onSuccess: data => {
      router.push(`/p/${data?.profileId}`);
    },
    onError: err => {
      apiNotify.collectionError();
    },
  });
  const onClick = () => {
    if (ref.current) {
      ref?.current.click();
    }
  };

  const onChange = e => {
    if (e.target.files?.[0]?.type !== 'application/json') {
      alert('허용되지 않은 형식의 파일입니다.');
      return false;
    }
    if (e.target.files?.[0]) {
      const fileReader = new FileReader();
      fileReader.onload = e => {
        const content = e.target.result;
        const json = JSON.parse(content);
        const cards = Array.from(new Set(json.ServerState.Cards.map(c => c.CardDefId)));
        const profileId = json.ServerState.Account.Id;
        mutate({ profileId, cards });
      };
      fileReader.readAsText(e.target.files[0]);
    } else {
      throw Error('failed to load file');
    }
  };

  return [onClick, onChange];
};

export default useUploadCollection;
