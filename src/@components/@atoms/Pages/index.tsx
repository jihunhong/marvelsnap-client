import Link from 'next/link';
import { useRouter } from 'next/router';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import * as S from './style';

const Pages = ({ totalPages = 1, pathname = '/' }: { pathname: string; totalPages: number }) => {
  const router = useRouter();
  const current = Number(router.query.page || 1);
  return (
    <S.PagesContainer>
      <Link
        href={{
          pathname,
          query: {
            page: current - 1,
          },
        }}
      >
        <li className={current === 1 ? 'disabled' : ''}>
          <BiChevronLeft />
        </li>
      </Link>
      <div className="pages">
        {Array.from({ length: totalPages }).map((pageNum, index) => (
          <Link
            key={index}
            href={{
              pathname,
              query: {
                page: index + 1,
              },
            }}
          >
            <li className={current === index + 1 ? 'active' : ''}>
              <a>{index + 1}</a>
            </li>
          </Link>
        ))}
      </div>
      <Link
        href={{
          pathname,
          query: {
            page: current + 1,
          },
        }}
      >
        <li className={current === totalPages ? 'disabled' : ''}>
          <BiChevronRight />
        </li>
      </Link>
    </S.PagesContainer>
  );
};

export default Pages;
