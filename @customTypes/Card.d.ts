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
};
