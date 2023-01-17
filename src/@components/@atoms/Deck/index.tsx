import Avatar from '@atoms/Avatar';
import Card from '@atoms/Card';
import { SeriesIcon } from '@atoms/Icon';
import Tag from '@atoms/Tag';
import type * as T from '@customTypes/Deck';
import useCopyCode from '@hooks/action/useDeckCode';
import useDeckTag from '@hooks/deck/useDeckTag';
import format from '@lib/day';
import { FaRegCopy } from 'react-icons/fa';
import * as S from './style';

const Deck = ({ title, description = '', created, expand, author, archtype }: T.Deck) => {
  const [handler] = useCopyCode({ items: expand?.items, title });
  const series = useDeckTag({ items: expand?.items });
  return (
    <S.DeckContainer>
      <div className="header">
        <div className="author">
          {/* <Avatar size={20} name={author} variant="beam" colors={['#FC580C', '#FC6B0A', '#F0AB3D', '#F8872E', '#FFA927', '#FDCA49']} /> */}
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
