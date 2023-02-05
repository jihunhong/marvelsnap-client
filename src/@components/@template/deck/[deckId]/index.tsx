import Avatar from '@atoms/Avatar';
import { SeriesIcon } from '@atoms/Icon';
import Tag from '@atoms/Tag';
import { deckTitleSuffix } from '@constant/text';
import useCopyCode from '@hooks/deck/useDeckCode';
import useDeckSeries from '@hooks/deck/useDeckSeries';
import format from '@lib/day';
import CardGrid from '@molecules/CardGrid';
import CommentInput from '@molecules/CommentInput';
import Comments from '@molecules/Comments';
import DeckCode from '@molecules/DeckCode';
import Recommend from '@molecules/Recommend';
import useDeckInfoQuery from '@query/useDeckInfo';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import * as S from './style';

const RawHtml = dynamic(() => import('@atoms/RawHtml'), {
  ssr: false,
});

const DeckDetailTemplate = () => {
  const [data] = useDeckInfoQuery();
  const [handler, encoded] = useCopyCode({ title: data?.title, items: data?.expand?.items });
  const [series] = useDeckSeries(data?.expand?.items);
  return (
    <>
      <Head>
        <title>{`${data?.title} ${deckTitleSuffix}`}</title>
      </Head>
      <S.DeckDetailTemplateContainer>
        <section className="deck-info">
          <CardGrid {...data} />
          <section className="meta">
            <h2>{data?.title}</h2>
            <div className="profile">
              <Avatar src={data?.expand?.writer?.avatarUrl} />
              <span>{data?.expand?.writer?.username || data?.expand?.writer?.name || 'Unknown'}</span>
            </div>
            <div className="series">
              {series.map(item => (
                <div key={item?.[0]}>
                  <Tag icon={<SeriesIcon />} data-series={item?.[0]}>
                    <>SERIES {item?.[0]}</>
                    <span>x{item?.[1]}</span>
                  </Tag>
                </div>
              ))}
            </div>
            <div></div>
            <div className="date">
              <span>{format(data?.created)}</span>
            </div>
          </section>
        </section>
        <section className="description">
          <RawHtml content={data?.description} />
        </section>
        <section className="actions">
          <DeckCode placeholder="" value={encoded} onClick={handler} />
          <Recommend {...data} />
        </section>
        <CommentInput {...data} />
        <Comments {...data} />
      </S.DeckDetailTemplateContainer>
    </>
  );
};

export default DeckDetailTemplate;
