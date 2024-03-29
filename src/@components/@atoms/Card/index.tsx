import CardImage from '@atoms/CardImage';
import { THREE_MINUTE } from '@constant/staleTime';
import type * as T from '@customTypes/Card';
import { getCardApi } from '@fetch/index';
import keys from '@query/keys';
import { useQueryClient } from 'react-query';
import * as S from './style';

const Card = ({ name, effect, cardDefId, w, h }: Partial<T.Card> & { w?: number; h?: number }) => {
  const queryClient = useQueryClient();
  const onMouseOver = async () => {
    if (cardDefId) {
      await queryClient.prefetchQuery([keys.getCard, cardDefId], () => getCardApi(cardDefId), {
        staleTime: THREE_MINUTE,
      });
    }
  };
  return (
    <S.CardContainer onMouseOver={onMouseOver}>
      <CardImage cardDefId={cardDefId!} w={w} />
      <div className="text-content">
        <p className="name">{name}</p>
        <p className="effect">{effect}</p>
      </div>
      <p className="name">{name}</p>
      <p className="effect">{effect}</p>
    </S.CardContainer>
  );
};

export default Card;
