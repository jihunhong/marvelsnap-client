import type * as T from '@customTypes/Card';
import type * as C from '@customTypes/CollectionCard';
import { ReactNode } from 'react';
import * as S from './style';

type Props = {
  dataSource: Array<T.Card> | Array<C.CollectionCard>;
  renderItem: (item: T.Card | C.CollectionCard) => ReactNode;
};

const CardList = ({ dataSource, renderItem }: Props) => {
  return <S.CardListContainer>{dataSource?.map(renderItem)}</S.CardListContainer>;
};

export default CardList;
