import * as S from './style';
import Link from 'next/link';
import Logo from '@atoms/Logo';

const Header = () => {
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
          {/* <Link href="/meta">
            <a>
              <span>Meta</span>
            </a>
          </Link> */}
        </div>
      </div>
    </S.Header>
  );
};

export default Header;
