import type * as T from '@customTypes/Card';
import { ReactNode } from 'react';
import * as S from './style';

type Props = {
  dataSource: Array<T.Card>;
  renderItem: (item: T.Card) => ReactNode;
};

const CardList = ({ dataSource, renderItem }: Props) => {
  return <S.CardListContainer>{dataSource?.map(renderItem)}</S.CardListContainer>;
};

export default CardList;
