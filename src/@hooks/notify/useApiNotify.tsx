import { toast } from 'react-toastify';

const useApiNotify = () => {
  const postDeckSuccess = () => toast.success('저장되었습니다!');
  const postDeckError = () => toast.error('덱 공유에 실패했습니다. 잠시후 다시 시도해주세요');

  return {
    postDeckSuccess,
    postDeckError,
  };
};

export default useApiNotify;
