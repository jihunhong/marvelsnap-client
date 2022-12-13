import * as S from './style';
import type * as T from '../../../../@types/Deck';
import Card from '../Card';

const Deck = ({ title, cards, author, archtype }: T.Deck) => {
  return (
    <S.DeckContainer>
      <div className="header">
        <h1>Deck Title</h1>
      </div>
      <div className="deck-list">
        <div className="offset"></div>
        <div className="cards">
          {Array(12)
            .fill()
            .map(() => (
              <Card />
            ))}
        </div>
      </div>
    </S.DeckContainer>
  );
};

export default Deck;
