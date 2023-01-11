import { MutableRefObject, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { modalStatus } from 'src/@store/modal';

const useModalControl = (key: string, ref: MutableRefObject<any>) => {
  const visible = useRecoilValue(modalStatus(key));
  useEffect(() => {
    if (ref?.current) {
      if (!visible) {
        ref.current.close();
      } else {
        if (!ref.current.open) ref.current.showModal();
      }
    }
  }, [ref, visible]);
};

export default useModalControl;
