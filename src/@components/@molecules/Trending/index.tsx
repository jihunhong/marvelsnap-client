import Divider from '@atoms/Divider';
import Post from '@atoms/Post';
import Link from 'next/link';
import * as S from './style';

const Trending = ({ dataSource }) => {
  return (
    <S.TrendingContainer>
      {dataSource?.map(item => (
        <>
          <Link key={item.id} href={`/article?id=${item.id}`}>
            <a>
              <Post key={item.id} {...item} />
            </a>
          </Link>
          <Divider margin={24} />
        </>
      ))}
    </S.TrendingContainer>
  );
};

export default Trending;
