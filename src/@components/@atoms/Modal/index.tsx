import AppLayout from '@layout/AppLayout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Modal, { setAppElement } from 'react-modal';
import * as S from './style';

type Props = {
  children: JSX.Element | Array<JSX.Element>;
  visible: boolean;
  onClose: (e: any) => void;
};
setAppElement('#__next');

const ModalBase = ({ children, visible, onClose }: Props) => {
  const router = useRouter();
  useEffect(() => {
    router.beforePopState(state => {
      state.options.scroll = false;
      return true;
    });
  }, []);
  return (
    <Modal style={S.style} isOpen={visible} preventScroll={true} onRequestClose={onClose}>
      <AppLayout>{children}</AppLayout>
    </Modal>
  );
};

export default ModalBase;
