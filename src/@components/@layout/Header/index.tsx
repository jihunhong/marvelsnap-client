import Avatar from '@atoms/Avatar';
import Logo from '@atoms/Logo';
import useUser from '@query/useUser';
import Link from 'next/link';
import * as S from './style';

const Header = () => {
  const [user] = useUser();
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
            <a>
              <span>덱</span>
            </a>
          </Link>
          <Link href="/cards">
            <a>
              <span>카드</span>
            </a>
          </Link>
          <Link href="/builder">
            <a>
              <span>덱 빌더</span>
            </a>
          </Link>
          {user ? <Avatar href="" src={user?.avatarUrl || user?.avatar} writer={user?.username || user?.name} /> : null}
        </div>
      </div>
    </S.Header>
  );
};

export default Header;
