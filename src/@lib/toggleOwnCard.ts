import { CollectionCard } from '@customTypes/index';

export const toggleOwnCardMapping = (cards: CollectionCard[], cardDefId: string) => {
  return cards.map((item: CollectionCard) => {
    if (item.cardDefId === cardDefId) {
      return { ...item, mine: !item.mine };
    }
    return item;
  });
};
