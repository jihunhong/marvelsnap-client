import type * as T from '.Card';

export type Deck = {
  title: string;
  description: string;
  expand: {
    items: Array<T.Card>;
  };
  author: string;
  archtype: Array<ArchType>;
};
