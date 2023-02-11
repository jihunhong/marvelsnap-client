import MetaDeck from '@atoms/MetaDeck';
import type * as T from '@customTypes/Deck';
import * as S from './style';

type Props = {
  dataSource?: undefined | Array<T.Deck>;
};

const MetaDeckList = ({ dataSource = [] }: Props) => {
  return (
    <S.MetaDeckListContainer>
      {dataSource?.map(item => (
        <MetaDeck key={item.id} {...item} cards={item.expand?.items} like={item?.like} comment={item?.comment} />
      ))}
    </S.MetaDeckListContainer>
  );
};

export default MetaDeckList;
