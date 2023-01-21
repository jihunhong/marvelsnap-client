import { searchingApi } from '@fetch/index';
import useInput from '@hooks/useInput';
import useDebounce from '@hooks/util/useDebounce';
import isClient from '@lib/isClient';
import keys from '@query/keys';
import { useDebugValue } from 'react';
import { useQuery } from 'react-query';

const useSearch = () => {
  const [value, handler] = useInput(null);
  const q = useDebounce(value, 500);
  const { data } = useQuery([keys.getSearch, q], () => searchingApi(q), {
    enabled: !!q && isClient(),
  });
  useDebugValue(data);
  return { value, handler, data };
};

export default useSearch;
