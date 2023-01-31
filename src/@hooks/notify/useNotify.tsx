import { toast } from 'react-toastify';

const useNotify = () => {
  const copySuccess = () => toast.success('덱코드가 복사되었습니다');
  const errorDeckCode = () => toast.error('올바르지 않은 덱코드 형식입니다');

  return {
    copySuccess,
    errorDeckCode,
  };
};

export default useNotify;
