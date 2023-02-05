import CardImage from '@atoms/CardImage';
import { baseImgix } from '@constant/imigx';
import { cardTitleSuffix, siteBaseUrl } from '@constant/text';
import CardDetail from '@molecules/CardDetail';
import CommentInput from '@molecules/CommentInput';
import Comments from '@molecules/Comments';
import Variants from '@molecules/Variants';
import useCardQuery from '@query/useCardQuery';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import * as S from './style';

const CardDetailTemplate = () => {
  const [data] = useCardQuery();
  const router = useRouter();

  return (
    <>
      <NextSeo
        title={`${data?.name}(${data?.en}) - ${cardTitleSuffix}`}
        description={`${data?.name} - ${data?.effect}`}
        openGraph={{
          url: `${siteBaseUrl}${router.asPath}`,
          title: `${data?.name}(${data?.en}) - ${cardTitleSuffix}`,
          description: `${data?.name} - ${data?.effect}`,
          images: [
            {
              url: `${baseImgix}/cards/basic/${data?.cardDefId}.png`,
            },
          ],
        }}
      />
      <S.CardDetailContainer>
        <div className="meta">
          <section>
            <CardImage cardDefId={data?.cardDefId} w={357} />
          </section>
          <section className="meta">
            <CardDetail {...data} />
            <Variants cardDefId={data?.cardDefId} dataSource={data?.expand?.variants} />
          </section>
        </div>
        <CommentInput {...data} />
        <Comments {...data} />
      </S.CardDetailContainer>
    </>
  );
};

export default CardDetailTemplate;
