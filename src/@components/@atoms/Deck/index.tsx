import Avatar from '@atoms/Avatar';
import Card from '@atoms/Card';
import { SeriesIcon } from '@atoms/Icon';
import Tag from '@atoms/Tag';
import type * as T from '@customTypes/Deck';
import type * as C from '@customTypes/Card';
import useCopyCode from '@hooks/action/useDeckCode';
import useDeckTag from '@hooks/deck/useDeckTag';
import useNavigate from '@hooks/useNavigate';
import format from '@lib/day';
import Link from 'next/link';
import { FaRegCopy } from 'react-icons/fa';
import * as S from './style';
import dynamic from 'next/dynamic';
const RawHtml = dynamic(() => import('@atoms/RawHtml'), {
  ssr: false,
  loading: () => <div>loading description...</div>,
});

const Deck = ({ id, title, description = '', created, cards, writer, archtype }: T.Deck) => {
  const [handler] = useCopyCode({ items: cards, title });
  const series = useDeckTag({ items: cards });
  const [navigate] = useNavigate({ href: `/deck/${id}` });
  return (
    <S.DeckContainer>
      <div className="header">
        <div className="writer" onClick={navigate}>
          <Avatar width={20} height={20} src="https://avatars.githubusercontent.com/u/21700764?v=4" />
          <a>
            <h4>{'쓴사람이름'}</h4>
          </a>
        </div>
        <div className="action" onClick={handler}>
          <FaRegCopy size={24} color="#fff" />
        </div>
      </div>
      <div className="deck-list">
        <div className="preview">
          <div className="meta" onClick={navigate}>
            <a>
              <h3>{title}</h3>
              <RawHtml content={description} />
            </a>
          </div>
          <div className="cards">
            {cards?.map((v: C.Card) => (
              <Link key={v.id} href={`/card/${v.cardDefId}`}>
                <a>
                  <Card {...v} />
                </a>
              </Link>
            ))}
          </div>
          <div className="meta-bottom" onClick={navigate}>
            <div className="tags">
              <Tag icon={<SeriesIcon />} className="tag" data-series={series}>
                <>SERIES {series}</>
              </Tag>
            </div>
            <h4>{format(created)}</h4>
          </div>
        </div>
      </div>
    </S.DeckContainer>
  );
};

export default Deck;
