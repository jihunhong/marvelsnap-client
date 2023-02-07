import Avatar from '@atoms/Avatar';
import Divider from '@atoms/Divider';
import { FlexColumn, FlexRow } from '@atoms/Flex/style';
import GoogleBtn from '@atoms/GoogleBtn';
import useUser from '@query/useUser';
import Link from 'next/link';
import { ForwardedRef, forwardRef, SyntheticEvent } from 'react';
import { CgNotes } from 'react-icons/cg';
import { FaRegIdCard, FaWrench } from 'react-icons/fa';
import * as S from './style';

type HeaderModalProps = { onClick: (e: SyntheticEvent) => void };

const HeaderModal = ({ onClick }: HeaderModalProps, ref: ForwardedRef<any>) => {
  const [user] = useUser();
  return (
    <S.HeaderModalContainer initial={{ x: -250, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ opacity: 0 }} ref={ref} onClick={onClick}>
      <div>
        <FlexRow className="profile">
          {user ? (
            <>
              <Avatar width={32} height={32} href="" src={user?.avatarUrl || user?.avatar} writer={user?.username || user?.name} />
              <FlexColumn>
                <span className="name">{user?.username || user?.name}</span>
                <span className="email">@{user?.email}</span>
              </FlexColumn>
            </>
          ) : (
            <GoogleBtn />
          )}
        </FlexRow>
      </div>
      <Divider margin={20} />
      <nav>
        <Link href="/decks">
          <a>
            <CgNotes color="#fff" />
            <span>덱</span>
          </a>
        </Link>
        <Link href="/cards">
          <a>
            <FaRegIdCard color="#fff" />
            <span>카드</span>
          </a>
        </Link>
        <Link href="/builder">
          <a>
            <FaWrench color="#fff" />
            <span>덱 빌더</span>
          </a>
        </Link>
      </nav>
    </S.HeaderModalContainer>
  );
};

export default forwardRef(HeaderModal);
