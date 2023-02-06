import { toast } from 'react-toastify';

const useNotify = () => {
  const copySuccess = () => toast.success('덱코드가 복사되었습니다');
  const errorDeckCode = () => toast.error('올바르지 않은 덱코드 형식입니다');
  const responsiveWarn = () =>
    toast.warn(
      <div>
        {'해당 페이지는 개발진행 중입니다.'}
        <br />
        {'PC환경에서 이용해주시기 바랍니다'}
      </div>,
      {
        autoClose: 10000,
        style: {
          fontSize: '0.9rem',
        },
      },
    );

  return {
    copySuccess,
    errorDeckCode,
    responsiveWarn,
  };
};

export default useNotify;
