import { Card } from '@customTypes/Card';
import keys from '@query/keys';
import { useQuery } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import { fetchCardList } from 'src/@fetch';
import { filterAtom, cardListAtom, filteredCardListAtom, cardsSelector, filterSelector } from 'src/@store/cardList';

const useCardListQuery = (): [Card[]] => {
  const [cardList, setCardList] = useRecoilState(cardListAtom);
  useQuery(keys.cardList, fetchCardList, {
    onSuccess: data => setCardList(data),
  });
  const filteredCardList = useRecoilValue(filteredCardListAtom);
  const filter = useRecoilValue(filterAtom);

  /*
   * client에서 필터링 UI를 이용했을 경우 filtering된 목록들로 보여줌
   */
  return [filter ? filteredCardList : cardList];
};

export default useCardListQuery;
