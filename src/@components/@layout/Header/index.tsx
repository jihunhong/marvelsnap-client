import Avatar from '@atoms/Avatar';
import Logo from '@atoms/Logo';
import useUser from '@query/useUser';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './style';

const Header = () => {
  const [user] = useUser();
  const router = useRouter();
  return (
    <S.Header>
      <div className="header-menu">
        <div className="logo">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>
        <div className="menus">
          <Link href="/decks">
            <a className={router.asPath === '/decks' ? 'active' : ''}>
              <span>덱</span>
            </a>
          </Link>
          <Link href="/cards">
            <a className={router.asPath === '/cards' ? 'active' : ''}>
              <span>카드</span>
            </a>
          </Link>
          <Link href="/builder">
            <a className={router.asPath === '/builder' ? 'active' : ''}>
              <span>덱 빌더</span>
            </a>
          </Link>
          <Link href="/download">
            <a className={router.asPath === '/download' ? 'active' : ''}>
              <span>다운로드</span>
            </a>
          </Link>
          {user ? <Avatar href="" src={user?.avatarUrl || user?.avatar} writer={user?.username || user?.name} /> : null}
        </div>
      </div>
    </S.Header>
  );
};

export default Header;
