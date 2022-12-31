export type Card = {
  name: string;
  src: string;
  cost: number;
  tags?: Array<string>;
  keywords?: Array<string>;
  source: Array<string>;
  power: number;
  variants?: Array<Props>;
  artist?: string;
  description: string;
};
