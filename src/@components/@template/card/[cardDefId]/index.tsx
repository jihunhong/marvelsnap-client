import CardImage from '@atoms/CardImage';
import CardDetail from '@molecules/CardDetail';
import CommentInput from '@molecules/CommentInput';
import Comments from '@molecules/Comments';
import Variants from '@molecules/Variants';
import useCardQuery from '@query/useCardQuery';
import * as S from './style';

const CardDetailTemplate = () => {
  const [data] = useCardQuery();

  return (
    <S.CardDetailContainer>
      <div className="meta">
        <section>
          <CardImage cardDefId={data?.cardDefId} priority w={357} h={483} />
        </section>
        <section className="meta">
          <CardDetail {...data} />
          <Variants cardDefId={data?.cardDefId} dataSource={data?.expand?.variants} />
        </section>
      </div>
      <CommentInput {...data} />
      <Comments {...data} />
    </S.CardDetailContainer>
  );
};

export default CardDetailTemplate;
