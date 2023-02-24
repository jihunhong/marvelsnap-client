import { SyntheticEvent, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { modalStatus } from 'src/@store/modal';

const useModalControl = (key: string) => {
  const visible = useRecoilValue(modalStatus(key));
  const dialogRef = useRef(null);
  useEffect(() => {
    if (dialogRef?.current) {
      if (!visible) {
        dialogRef.current.close();
      } else {
        if (!dialogRef.current.open) dialogRef?.current?.showModal();
      }
    }
  }, [dialogRef, visible]);
  const close = () => {
    dialogRef?.current?.close();
  };

  const onClick = (e: SyntheticEvent) => {
    if (e.target === dialogRef.current) {
      dialogRef.current?.close();
    }
    return;
  };
  return { ref: dialogRef, onClick, close };
};

export default useModalControl;
