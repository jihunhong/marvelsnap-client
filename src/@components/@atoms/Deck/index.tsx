import Card from '@atoms/Card';
import SeriesIcon from '@atoms/Icon/series';
import Tag from '@atoms/Tag';
import type * as C from '@customTypes/Card';
import type * as T from '@customTypes/Deck';
import useCopyCode from '@hooks/deck/useDeckCode';
import useDeckTag from '@hooks/deck/useDeckTag';
import useNavigate from '@hooks/useNavigate';
import format from '@lib/day/format';
import Link from 'next/link';
import { FaRegCommentDots, FaRegCopy } from 'react-icons/fa';
import { FiThumbsUp } from 'react-icons/fi';
import * as S from './style';
import { asc } from '@lib/sort';

const Deck = ({ id, title, created, cards, like, comment }: T.Deck) => {
  const [handler] = useCopyCode({ items: cards, title });
  const series = useDeckTag({ items: cards });
  const [navigate] = useNavigate({ href: `/decks?id=${id}`, as: `/deck/${id}` });
  const date = format(created);
  return (
    <S.DeckContainer>
      <div className="header">
        <div className="meta-top">
          <Link href={`/decks?id=${id}`} as={`/deck/${id}`} scroll={false} shallow={true}>
            <a>
              <div className="tags">
                <Tag icon={<SeriesIcon />} className="tag" data-series={series}>
                  <>SERIES {series}</>
                </Tag>
              </div>
            </a>
          </Link>
        </div>

        <div className="action" onClick={handler}>
          <FaRegCopy size={24} color="#fff" />
        </div>
      </div>
      <div className="deck-list">
        <div className="preview" onClick={navigate}>
          <div className="meta">
            <h2>{title}</h2>
          </div>
          <div className="cards">
            {asc(cards).map((v: C.Card) => (
              <Card key={v.id} {...v} />
            ))}
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="post-info">
          <div>
            <FiThumbsUp size={18} />
            <span>{like?.length || 0}</span>
          </div>
          <div>
            <FaRegCommentDots size={18} />
            <span>{comment?.length || 0}</span>
          </div>
        </div>
        <span>{date}</span>
      </div>
    </S.DeckContainer>
  );
};

export default Deck;
