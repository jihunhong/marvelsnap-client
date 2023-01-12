import { Card } from '@customTypes/Card';
import keys from '@query/keys';
import { useDebugValue, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getCardListApi } from '@fetch/index';
import { cardListAtom, filterAtom, filteredCardListAtom } from 'src/@store/cardList';

const useCardListQuery = (): [Card[]] => {
  const [cardList, setCardList] = useRecoilState(cardListAtom);
  const prefetched = useQuery([keys.getCardList], getCardListApi, {
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  const filteredCardList = useRecoilValue(filteredCardListAtom);
  const filter = useRecoilValue(filterAtom);
  useEffect(() => {
    if (prefetched) setCardList(prefetched.data);
  }, [prefetched, setCardList]);

  /*
   * client에서 필터링 UI를 이용했을 경우 filtering된 목록들로 보여줌
   */
  useDebugValue([filter, filteredCardList, cardList]);
  return [filter ? filteredCardList : cardList];
};

export default useCardListQuery;
