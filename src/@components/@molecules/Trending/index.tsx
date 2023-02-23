import Divider from '@atoms/Divider';
import Post from '@atoms/Post';
import Link from 'next/link';
import { Fragment } from 'react';
import * as S from './style';

const Trending = ({ dataSource }) => {
  return (
    <S.TrendingContainer>
      {dataSource?.map(item => (
        <Fragment key={item.id}>
          <Link href={`/article?id=${item.id}`}>
            <a>
              <Post {...item} />
            </a>
          </Link>
          <Divider margin={24} />
        </Fragment>
      ))}
    </S.TrendingContainer>
  );
};

export default Trending;
