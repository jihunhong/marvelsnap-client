import keys from '@query/keys';
import { useQuery } from 'react-query';
import { getDeckListApi } from 'src/@fetch';

const useDeckListQuery = () => {
  const { data } = useQuery(keys.getDeckList, getDeckListApi, {
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return data;
};

export default useDeckListQuery;
