import Avatar from '@atoms/Avatar';
import Card from '@atoms/Card';
import { SeriesIcon } from '@atoms/Icon';
import Tag from '@atoms/Tag';
import type * as T from '@customTypes/Deck';
import type * as C from '@customTypes/Card';
import useCopyCode from '@hooks/deck/useDeckCode';
import useDeckTag from '@hooks/deck/useDeckTag';
import useNavigate from '@hooks/useNavigate';
import format from '@lib/day';
import Link from 'next/link';
import { FaRegCopy } from 'react-icons/fa';
import * as S from './style';

const Deck = ({ id, title, description = '', created, cards, writer, archtype }: T.Deck) => {
  const [handler] = useCopyCode({ items: cards, title });
  const series = useDeckTag({ items: cards });
  return (
    <S.DeckContainer>
      <div className="header">
        <div className="writer">
          <Avatar width={20} height={20} src={writer?.avatar || writer?.avatarUrl} writer={writer?.username || writer?.name} />
          <Link href={{ pathname: '/deck/[deckId]', query: { deckId: id } }}>
            <a target="_blank" rel="noopener noreferrer">
              <h4>{writer?.username || writer?.name || 'Unknown'}</h4>
            </a>
          </Link>
        </div>
        <div className="action" onClick={handler}>
          <FaRegCopy size={24} color="#fff" />
        </div>
      </div>
      <Link href={{ pathname: '/deck/[deckId]', query: { deckId: id } }}>
        <a target="_blank" rel="noopener noreferrer">
          <div className="deck-list">
            <div className="preview">
              <div className="meta">
                <Link href={{ pathname: '/deck/[deckId]', query: { deckId: id } }}>
                  <a target="_blank" rel="noopener noreferrer">
                    <h2>{title}</h2>
                  </a>
                  {/* <RawHtml content={description} /> */}
                </Link>
              </div>
              <div className="cards">
                {cards?.map((v: C.Card) => (
                  <Link key={v.id} href={`/card/${v.cardDefId}`}>
                    <a target="_blank" rel="noopener noreferrer">
                      <Card {...v} />
                    </a>
                  </Link>
                ))}
              </div>
              <div className="meta-bottom">
                <div className="tags">
                  <Tag icon={<SeriesIcon />} className="tag" data-series={series}>
                    <>SERIES {series}</>
                  </Tag>
                </div>
                <h4>{format(created)}</h4>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </S.DeckContainer>
  );
};

export default Deck;
