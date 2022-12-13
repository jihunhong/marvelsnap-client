import type * as T from '.Card';

export type Deck = {
  title: string;
  cards: Array<T.Card>;
  author: string;
  archtype: Array<ArchType>;
};
