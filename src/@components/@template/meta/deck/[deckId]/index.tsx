import Avatar from '@atoms/Avatar';
import SeriesIcon from '@atoms/Icon/series';
import Tag from '@atoms/Tag';
import { deckTitleSuffix, siteBaseUrl } from '@constant/text';
import useCopyCode from '@hooks/deck/useDeckCode';
import useDeckSeries from '@hooks/deck/useDeckSeries';
import format from '@lib/day/format';
import CardGrid from '@molecules/CardGrid';
import CommentInput from '@molecules/CommentInput';
import Comments from '@molecules/Comments';
import DeckCode from '@molecules/DeckCode';
import Recommend from '@molecules/Recommend';
import useMetaDeckInfoQuery from '@query/useMetaDeckInfoQuery';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { FaLink } from 'react-icons/fa';
import * as S from './style';

const RawHtml = dynamic(() => import('@atoms/RawHtml'), {
  ssr: false,
});

const MetaDeckDetailTemplate = () => {
  const [data] = useMetaDeckInfoQuery();
  const [handler, encoded] = useCopyCode({ title: data?.title, items: data?.expand?.items });
  const [series] = useDeckSeries(data?.expand?.items);
  const router = useRouter();
  return (
    <>
      <NextSeo
        title={`${data?.title} - ${deckTitleSuffix}`}
        openGraph={{
          url: `${siteBaseUrl}/${router.asPath}`,
          title: `${data?.title} - ${deckTitleSuffix}`,
        }}
      />
      <S.MetaDeckDetailTemplateContainer>
        <section className="deck-info">
          <CardGrid {...data} />
          <section className="meta">
            <h2>{data?.title}</h2>
            <div className="profile">
              <Avatar writer={data?.writer} />
              <span>{data?.writer}</span>
              <a href={data?.origin} target="_blank" rel="noreferrer noopener">
                <FaLink size={18} color="#efefef" />
              </a>
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
      </S.MetaDeckDetailTemplateContainer>
    </>
  );
};

export default MetaDeckDetailTemplate;
