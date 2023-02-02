import { Card } from '.Card';
import { User } from './User';

export type Deck = {
  id: string;
  title: string;
  description: string;
  expand: {
    items: Array<C.Card>;
    writer: User;
  };
  collectionId?: string;
  cards: Array<C.Card>;
  writer: User;
  archtype: Array<ArchType>;
  created: string; // "2023-01-11 11:41:14.909Z"
  like?: Array<string>;
  comment?: Array<string>;
};
