import Avatar from '@atoms/Avatar';
import useLogout from '@query/useLogout';
import useUser from '@query/useUser';
import Link from 'next/link';
import * as S from './style';

const UserDetailMenu = () => {
  const [user] = useUser();
  const [onClick] = useLogout();
  return (
    <>
      {user ? (
        <S.UserDetailMenuContainer>
          <summary>{user ? <Avatar href="" src={user?.avatarUrl || user?.avatar} writer={user?.username || user?.name} /> : null}</summary>
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
      ) : null}
    </>
  );
};

export default UserDetailMenu;
