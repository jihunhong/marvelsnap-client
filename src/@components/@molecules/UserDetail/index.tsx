import Avatar from '@atoms/Avatar';
import useLogout from '@query/useLogout';
import useUser from '@query/useUser';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './style';

const UserMenu = () => {
  const [user] = useUser();
  const [onClick] = useLogout();
  const router = useRouter();
  return (
    <>
      {user ? (
        <S.UserDetailMenuContainer>
          <summary>{<Avatar href="" src={user?.avatarUrl || user?.avatar} writer={user?.username || user?.name} />}</summary>
          <div className="menu">
            <div>
              <Link href={{ pathname: '/collection/[id]', query: { id: user.id } }}>
                <a>
                  <div>컬렉션</div>
                </a>
              </Link>
            </div>
            <div onClick={onClick}>
              <a>로그아웃</a>
            </div>
          </div>
        </S.UserDetailMenuContainer>
      ) : (
        <Link href="/login">
          <a className={router.asPath === '/login' ? 'active' : ''}>
            <span>로그인</span>
          </a>
        </Link>
      )}
    </>
  );
};

export default UserMenu;
