import Divider from '@atoms/Divider';
import Post from '@atoms/Post';
import { THREE_MINUTE } from '@constant/staleTime';
import { getArticle } from '@fetch/index';
import keys from '@query/keys';
import Link from 'next/link';
import { Fragment } from 'react';
import { useQueryClient } from 'react-query';
import * as S from './style';

const Trending = ({ dataSource }) => {
  const queryClient = useQueryClient();
  const onMouseOver = async e => {
    const id = e?.currentTarget?.dataset?.id;
    if (id) {
      await queryClient.prefetchQuery([keys.getArticle, id], () => getArticle(id), {
        staleTime: THREE_MINUTE,
      });
    }
  };

  return (
    <S.TrendingContainer>
      {dataSource?.map(item => (
        <Fragment key={item.id}>
          <Link href={`/article?id=${item.id}`}>
            <a onMouseOver={onMouseOver} data-id={item.id}>
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
