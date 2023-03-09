export interface Expand {
  items: Array<Card>;
}

export interface Variant {
  variants: Array<Variant>;
}

export type Card = {
  id: string;
  name: string;
  src: string;
  cost: number;
  tags?: Array<string>;
  keywords?: Array<string>;
  source: Array<string>;
  power: number;
  grade: number;
  variants?: Array<Props>;
  artist?: string;
  effect: string;
  en: string;
  cardDefId: string;
  expand?: Expand | Variant | Array<any>;
  collectionId?: string;
};
