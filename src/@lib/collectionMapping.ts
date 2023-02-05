/**
 * @description string 형태로 받은 배열을 cardDefId를 key로해 만든 Map으로 Array<Card>형태로 변환합니다.
 */

import { Card } from '@customTypes/Card';
import { CollectionCard } from '@customTypes/CollectionCard';

export const aggregate = ({ cardNames = [], data = [] }: { cardNames: string[]; data: Array<Card> }): Array<CollectionCard> => {
  const origin: Map<string, Card> = data?.reduce((map, card) => {
    map.set(card.cardDefId, card);
    return map;
  }, new Map());

  const mine: Map<string, CollectionCard> = cardNames?.reduce((map, cardDefId) => {
    map.set(cardDefId, { ...origin.get(cardDefId), mine: true });
    return map;
  }, new Map());

  const collection: Array<CollectionCard> = data?.reduce((array: Array<CollectionCard>, card: Card) => {
    const exist = mine.get(card.cardDefId);
    if (exist) {
      array.push(exist);
    } else {
      array.push({ ...origin.get(card.cardDefId)!, mine: false });
    }
    return array;
  }, new Array());
  return collection;
};
