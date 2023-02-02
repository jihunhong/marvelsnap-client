import { SyntheticEvent, useEffect, useRef } from 'react';

const usePropsModalControl = (visible: boolean) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    // dialog DOM 컨트롤
    if (dialogRef?.current) {
      if (visible) {
        if (!dialogRef?.current.open) {
          dialogRef?.current.showModal();
        }
      } else {
        dialogRef?.current.close();
      }
    }
  }, [dialogRef, visible]);

  const onClick = (e: SyntheticEvent) => {
    if (e.target === dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return { ref: dialogRef, onClick };
};

export default usePropsModalControl;
