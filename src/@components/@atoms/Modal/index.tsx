import useModalControl from '@hooks/useModalControl';
import { useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { modalStatus } from 'src/@store/modal';
import * as S from './style';

type Props = {
  children: JSX.Element | Array<JSX.Element>;
  modalKey: string;
};

const ModalBase = ({ children, modalKey: key }: Props) => {
  const visible = useRecoilValue(modalStatus(key));
  const dialogRef = useRef();
  useModalControl(key, dialogRef);
  if (!visible) {
    return <></>;
  }

  return <S.ModalBaseContainer ref={dialogRef}>{children}</S.ModalBaseContainer>;
};

export default ModalBase;
