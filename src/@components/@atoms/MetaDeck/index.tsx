import SeriesIcon from '@atoms/Icon/series';
import Tag from '@atoms/Tag';
import type * as C from '@customTypes/Card';
import type * as T from '@customTypes/Deck';
import { getMetaDeckApi } from '@fetch/index';
import useCopyCode from '@hooks/deck/useDeckCode';
import useDeckTag from '@hooks/deck/useDeckTag';
import useNavigate from '@hooks/useNavigate';
import { asc } from '@lib/sort';
import keys from '@query/keys';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FaLink, FaRegCommentDots, FaRegCopy } from 'react-icons/fa';
import { FiThumbsUp } from 'react-icons/fi';
import { useQueryClient } from 'react-query';
import * as S from './style';

const CardImage = dynamic(() => import('@atoms/CardImage'), {
  ssr: false,
});

const MetaDeck = ({ id, title, cards, like, comment, origin, writer }: T.Deck) => {
  const [handler] = useCopyCode({ items: cards, title });
  const series = useDeckTag({ items: cards });
  const [navigate] = useNavigate({ href: `/meta?id=${id}`, as: `/meta/deck/${id}` });
  const queryClient = useQueryClient();
  const onMouseOver = async () => {
    await queryClient.prefetchQuery([keys.getMetaDeck, id], () => getMetaDeckApi(id), {
      staleTime: 86400,
    });
  };
  return (
    <S.MetaDeckContainer onMouseOver={onMouseOver}>
      <div className="header">
        <div className="meta-top">
          <Link href={`/meta?id=${id}`} as={`/meta/deck/${id}`} scroll={false} shallow={true}>
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
          <a href={origin} target="_blank" rel="noreferrer noopener">
            <FaLink size={24} color="#efefef" />
          </a>
          <FaRegCopy size={24} color="#efefef" />
        </div>
      </div>
      <div className="deck-list">
        <div className="preview" onClick={navigate}>
          <div className="meta">
            <h2>{title}</h2>
          </div>
          <div className="cards">
            {asc(cards).map((v: C.Card) => (
              <CardImage key={v.id} cardDefId={v.cardDefId} />
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
        <span>{writer as string}</span>
      </div>
    </S.MetaDeckContainer>
  );
};

export default MetaDeck;
