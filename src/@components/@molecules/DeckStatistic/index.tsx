import { DestroyIcon, DiscardIcon, MoveIcon, NoneAbilityIcon, OnGoingIcon, OnRevealIcon } from '@atoms/Icon';
import type * as T from '@customTypes/Card';
import useCardStatistic from '@hooks/useCardStatistic';
import * as S from './style';

type Props = {
  dataSource?: Array<T.Card>;
};

const DeckStatistic = ({ dataSource = [] }: Props) => {
  const [items] = useCardStatistic(dataSource);

  return (
    <S.DeckStatisticContainer>
      <div data-type="keyword" data-value="출현">
        <span>{items['출현']}</span>
        <OnRevealIcon />
      </div>
      <div data-type="keyword" data-value="지속">
        <span>{items['지속']}</span>
        <OnGoingIcon />
      </div>
      <div data-type="keyword" data-value="능력없음">
        <span>{items['능력없음']}</span>
        <NoneAbilityIcon />
      </div>
      <div data-type="keyword" data-value="버리기">
        <span>{items['버리기']}</span>
        <DiscardIcon />
      </div>
      <div data-type="keyword" data-value="이동">
        <span>{items['이동']}</span>
        <MoveIcon />
      </div>
      <div data-type="keyword" data-value="파괴">
        <span>{items['파괴']}</span>
        <DestroyIcon />
      </div>
    </S.DeckStatisticContainer>
  );
};

export default DeckStatistic;
