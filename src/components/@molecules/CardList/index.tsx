import * as S from './style';
import Card from '../../@atoms/Card';

const CardList = ({ dataSource }) => {
  return (
    <S.CardListContainer>
      {Array(160)
        .fill()
        .map(() => (
          <Card />
        ))}
    </S.CardListContainer>
  );
};

export default CardList;
