import CardImage from '@atoms/CardImage';
import { cardTitleSuffix } from '@constant/text';
import CardDetail from '@molecules/CardDetail';
import CommentInput from '@molecules/CommentInput';
import Comments from '@molecules/Comments';
import Variants from '@molecules/Variants';
import useCardQuery from '@query/useCardQuery';
import Head from 'next/head';
import * as S from './style';

const CardDetailTemplate = () => {
  const [data] = useCardQuery();

  return (
    <>
      <Head>
        <title>{`${data?.name}(${data?.en}) ${cardTitleSuffix}`}</title>
      </Head>
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
