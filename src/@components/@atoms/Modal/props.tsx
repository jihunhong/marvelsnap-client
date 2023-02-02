import Button from '@atoms/Button';
import usePropsModalControl from '@hooks/modal/usePropModalControl';
import { BsX } from 'react-icons/bs';
import * as S from './style';

type PropsModalBaseProps = {
  icon?: JSX.Element;
  title: string;
  visible: boolean;
  children: JSX.Element | Array<JSX.Element>;
  onClose?: () => void;
};

const PropsModalBase = ({ icon, title, visible, children, onClose }: PropsModalBaseProps) => {
  const { ref, onClick, close } = usePropsModalControl(visible);
  if (!visible) {
    return null;
  }

  return (
    <S.PropsModalContainer onClose={onClose} onClick={onClick} ref={ref} initial={{ opacity: 0, x: '-50%', y: '-40%' }} animate={{ opacity: 1, x: '-50%', y: '-50%' }} exit={{ opacity: 0 }}>
      <div className="header">
        {icon}
        <span>{title}</span>
        <BsX className="closer" color={'#fff'} size={24} onClick={close} />
      </div>
      <div className="body">{children}</div>
      <div className="footer">
        <Button colorType="plain" onClick={close}>
          <span>닫기</span>
        </Button>
      </div>
    </S.PropsModalContainer>
  );
};

export default PropsModalBase;
