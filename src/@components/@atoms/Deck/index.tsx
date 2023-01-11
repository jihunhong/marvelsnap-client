import { BsClock, BsDownload } from 'react-icons/bs';
import type * as T from '@customTypes/Deck';
import Avatar from '@atoms/Avatar';
import Card from '@atoms/Card';
import * as S from './style';

const Deck = ({ title, description = '', expand, author, archtype }: T.Deck) => {
  return (
    <S.DeckContainer>
      <div className="header">
        <div className="author">
          <Avatar width={20} height={20} src="https://avatars.githubusercontent.com/u/21700764?v=4" />
          <a>
            <h4>jihunhong</h4>
          </a>
        </div>
        <div className="action">
          <BsDownload size={24} color="#fff" />
        </div>
      </div>
      <div className="deck-list">
        <div className="preview">
          <div className="meta">
            <a>
              <h3>{title}</h3>
              <h4>{description}</h4>
            </a>
          </div>
          <div className="cards">
            {expand?.items?.map(v => (
              <Card key={v.id} {...v} />
            ))}
          </div>
          <div className="meta-bottom">
            <BsClock color="#fff" size={14} />
            <h4>일주일전</h4>
          </div>
        </div>
      </div>
    </S.DeckContainer>
  );
};

export default Deck;
