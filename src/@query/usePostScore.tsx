import { postScoreApi } from '@fetch/index';
import useApiNotify from '@hooks/notify/useApiNotify';
import keys from '@query/keys';
import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const usePostScore = ({ collectionId, recordId }: { collectionId: string; recordId: string }) => {
  const queryClient = useQueryClient();
  const apiNotify = useApiNotify();
  const { mutate } = useMutation(postScoreApi, {
    onSuccess: () => {
      queryClient.invalidateQueries([keys.getScoreList, collectionId, recordId]);
      apiNotify.postScoreSuccess();
    },
    onError: () => {
      queryClient.invalidateQueries([keys.getScoreList, collectionId, recordId]);
      apiNotify.postScoreError();
    },
  });

  return [mutate];
};

export default usePostScore;
