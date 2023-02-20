import { postCollectionApi } from '@fetch/index';
import useApiNotify from '@hooks/notify/useApiNotify';
import useBlockNotify from '@hooks/notify/useBlockNotify';
import useCollection from '@query/useCollection';
import { SyntheticEvent } from 'react';
import { useMutation } from 'react-query';
import { useRecoilState } from 'recoil';
import { userAtom } from 'src/@store/user';

const useCollectionSync = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const notify = useBlockNotify();
  const apiNotify = useApiNotify();
  const { profileId } = useCollection();
  const { mutate } = useMutation(postCollectionApi, {
    onSuccess: (response: any) => {
      apiNotify.postCollectionSuccess();
      setUser(response?.data);
    },
    onError: () => {
      apiNotify.postCollectionError();
    },
  });

  const onClick = (e: SyntheticEvent) => {
    if (!user) {
      return notify.loginAccessNotify();
    }
    mutate({ profileId, userId: user!.id });
  };

  return [onClick];
};

export default useCollectionSync;
