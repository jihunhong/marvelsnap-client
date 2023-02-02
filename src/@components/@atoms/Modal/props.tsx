import usePropsModalControl from '@hooks/modal/usePropModalControl';
import * as S from './style';

type PropsModalBaseProps = {
  visible: boolean;
  children: JSX.Element | Array<JSX.Element>;
  onClose?: () => void;
};

const PropsModalBase = ({ visible, children, onClose }: PropsModalBaseProps) => {
  const { ref, onClick } = usePropsModalControl(visible);
  if (!visible) {
    return null;
  }

  return (
    <S.PropsModalContainer onClose={onClose} onClick={onClick} ref={ref}>
      {children}
    </S.PropsModalContainer>
  );
};

export default PropsModalBase;
