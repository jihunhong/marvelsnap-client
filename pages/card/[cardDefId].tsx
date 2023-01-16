import { FlexColumn, FlexRow } from '@atoms/Flex/style';
import { SeriesIcon, StarIcon } from '@atoms/Icon';
import Tag from '@atoms/Tag';
import { baseImgix } from '@constant/imigx';
import { kIds } from '@constant/keywords';
import { getCardApi } from '@fetch/index';
import DetailLayout from '@layout/DetailLayout';
import PageIntro from '@molecules/PageIntro';
import Rating from '@molecules/Rating';
import keys from '@query/keys';
import useCardQuery from '@query/useCardQuery';
import { NextPage, NextPageContext } from 'next';
import { dehydrate, QueryClient } from 'react-query';

export async function getServerSideProps(context: NextPageContext) {
  const queryClient = new QueryClient();
  const id = context.query?.cardDefId;
  await queryClient.prefetchQuery([keys.getCard, id], () => getCardApi(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Detail: NextPage = props => {
  const [data] = useCardQuery();
  return (
    <>
      <DetailLayout>
        <PageIntro title={data?.en} description={''}>
          <FlexRow></FlexRow>
        </PageIntro>
        <section>
          <div>
            <img src={`${baseImgix}/cards/basic/${data?.en?.toLowerCase().replaceAll(' ', '-')}.webp?w=480&h=480&trim=auto`} loading="lazy" alt={data?.name} />
            <div className="meta">
              <p className="name">{`${data?.en} - ${data?.name}`}</p>
              <p className="effect">{data?.effect}</p>
              <div>
                <Tag icon={<SeriesIcon />} data-series={data?.grade}>
                  SEREIS {data?.grade}
                </Tag>
                {data?.keywords?.map((item: string) => (
                  <Tag data-keyword={kIds[item]} key={item}>
                    {kIds[item]}
                  </Tag>
                ))}
              </div>
              <section className="grid">
                <section className="label">
                  <h3>카드 평가</h3>
                  <h2>2.8</h2>
                </section>
                <section />
                <section className="rating-status">
                  <section className="progress-grid">
                    <div>
                      <StarIcon size={8} />
                      <StarIcon size={8} />
                      <StarIcon size={8} />
                      <StarIcon size={8} />
                      <StarIcon size={8} />
                    </div>
                    <progress max="100" value="70" />
                  </section>
                  <section className="progress-grid">
                    <div>
                      <StarIcon size={8} />
                      <StarIcon size={8} />
                      <StarIcon size={8} />
                      <StarIcon size={8} />
                    </div>
                    <progress max="100" value="50" />
                  </section>
                  <section className="progress-grid">
                    <div>
                      <StarIcon size={8} />
                      <StarIcon size={8} />
                      <StarIcon size={8} />
                    </div>
                    <progress max="100" value="40" />
                  </section>
                  <section className="progress-grid">
                    <div>
                      <StarIcon size={8} />
                      <StarIcon size={8} />
                    </div>
                    <progress max="100" value="20" />
                  </section>
                  <section className="progress-grid">
                    <div>
                      <StarIcon size={8} />
                    </div>
                    <progress max="100" value="7" />
                  </section>
                </section>
              </section>
              <div>
                <Rating value={2} />
              </div>
            </div>
          </div>
        </section>
      </DetailLayout>
    </>
  );
};

export default Detail;
