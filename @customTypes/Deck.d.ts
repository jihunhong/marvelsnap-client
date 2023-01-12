import type * as T from '.Card';

export type Deck = {
  id: string;
  title: string;
  description: string;
  expand: {
    items: Array<T.Card>;
  };
  author: string;
  archtype: Array<ArchType>;
  created: string; // "2023-01-11 11:41:14.909Z"
};
