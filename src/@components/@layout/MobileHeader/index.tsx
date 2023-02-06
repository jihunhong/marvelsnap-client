import Avatar from '@atoms/Avatar';
import Logo from '@atoms/Logo';
import usePropsModalControl from '@hooks/modal/usePropModalControl';
import useToggle from '@hooks/useToggle';
import HeaderModal from '@molecules/Modal/HeaderModal';
import useUser from '@query/useUser';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { SyntheticEvent } from 'react';
import { FiMenu } from 'react-icons/fi';
import * as S from './style';

const MobileHeader = () => {
  const [user] = useUser();
  const [visible, handler] = useToggle();
  const { ref, close } = usePropsModalControl(visible);
  const onClick = (e: SyntheticEvent) => {
    if (e.target === ref.current) {
      ref.current.close();
    }
    handler();
  };
  return (
    <>
      <S.MobileHeaderContainer>
        <div>
          <FiMenu size={32} onClick={handler} />
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          {!user ? <Avatar href="" src={user?.avatarUrl || user?.avatar} writer={user?.username || user?.name} /> : <div></div>}
        </div>
      </S.MobileHeaderContainer>
      {visible ? (
        <AnimatePresence>
          <HeaderModal ref={ref} onClick={onClick} />
        </AnimatePresence>
      ) : null}
    </>
  );
};

export default MobileHeader;
