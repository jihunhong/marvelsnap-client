import Avatar from '@atoms/Avatar';
import Divider from '@atoms/Divider';
import { FlexColumn, FlexRow } from '@atoms/Flex/style';
import GoogleBtn from '@atoms/GoogleBtn';
import StarIcon from '@atoms/Icon/star';
import useUser from '@query/useUser';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ForwardedRef, forwardRef, SyntheticEvent } from 'react';
import { BiDownload } from 'react-icons/bi';
import { BsDownload, BsStarFill } from 'react-icons/bs';
import { CgNotes } from 'react-icons/cg';
import { FaHome, FaRegIdCard, FaWrench } from 'react-icons/fa';
import * as S from './style';

type HeaderModalProps = { onClick: (e: SyntheticEvent) => void };

const HeaderModal = ({ onClick }: HeaderModalProps, ref: ForwardedRef<any>) => {
  const [user] = useUser();
  const router = useRouter();

  return (
    <S.HeaderModalContainer transition={{ default: { ease: 'linear' } }} initial={{ x: -250, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ opacity: 0 }} ref={ref} onClick={onClick}>
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
        <Link href="/">
          <a className={router.asPath === '/' ? 'active' : ''}>
            <FaHome size={22} color="#fff" />
            <span>홈</span>
          </a>
        </Link>
        <Link href="/meta">
          <a className={router.asPath === '/meta' ? 'active' : ''}>
            <BsStarFill size={22} color="#fff" />
            <span>메타</span>
          </a>
        </Link>
        <Link href="/decks">
          <a className={router.asPath === '/decks' ? 'active' : ''}>
            <CgNotes size={22} color="#fff" />
            <span>덱</span>
          </a>
        </Link>
        <Link href="/cards">
          <a className={router.asPath === '/cards' ? 'active' : ''}>
            <FaRegIdCard size={22} color="#fff" />
            <span>카드</span>
          </a>
        </Link>
        <Link href="/builder">
          <a className={router.asPath === '/builder' ? 'active' : ''}>
            <FaWrench size={22} color="#fff" />
            <span>덱 빌더</span>
          </a>
        </Link>
        <Link href="/download">
          <a className={router.asPath === '/download' ? 'active' : ''}>
            <BiDownload size={22} color="#fff" />
            <span>다운로드</span>
          </a>
        </Link>
      </nav>
    </S.HeaderModalContainer>
  );
};

export default forwardRef(HeaderModal);
