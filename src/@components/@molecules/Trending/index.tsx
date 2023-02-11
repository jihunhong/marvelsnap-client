import Post from '@atoms/Post';
import { getArticleListApi } from '@fetch/index';
import keys from '@query/keys';
import { useQuery } from 'react-query';
import * as S from './style';

const Trending = () => {
  const { data } = useQuery([keys.getArticles], () => getArticleListApi(), {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
  return (
    <S.TrendingContainer>
      {data?.items.map(item => (
        <Post key={item.id} {...item} />
      ))}
    </S.TrendingContainer>
  );
};

export default Trending;
