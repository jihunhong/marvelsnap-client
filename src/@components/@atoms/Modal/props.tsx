import usePropsModalControl from '@hooks/modal/usePropModalControl';
import { BsXCircle } from 'react-icons/bs';
import * as S from './style';

type PropsModalBaseProps = {
  visible: boolean;
  children: JSX.Element | Array<JSX.Element>;
  onClose?: () => void;
};

const PropsModalBase = ({ visible, children, onClose }: PropsModalBaseProps) => {
  const { ref, onClick, close } = usePropsModalControl(visible);
  if (!visible) {
    return null;
  }

  return (
    <S.PropsModalContainer onClose={onClose} onClick={onClick} ref={ref} initial={{ opacity: 0, x: '-50%', y: '-40%' }} animate={{ opacity: 1, x: '-50%', y: '-50%' }} exit={{ opacity: 0 }}>
      <div className="header">
        <BsXCircle color={'#fff'} size={24} onClick={close} />
      </div>
      {children}
    </S.PropsModalContainer>
  );
};

export default PropsModalBase;
