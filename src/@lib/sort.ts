import * as T from '@customTypes/Card';

export const asc = (items: Array<T.Card>) => {
  return items
    .sort((a, b) => {
      if (a.en < b.en) return -1;
      if (a.en > b.en) return 1;
      return 0;
    })
    .sort((a, b) => {
      return a.power - b.power;
    })
    .sort((a, b) => {
      return a.cost - b.cost;
    });
};

export const desc = (items: Array<T.Card>) => {
  return items
    .sort((a, b) => {
      if (a.en > b.en) return -1;
      if (a.en < b.en) return 1;
      return 0;
    })
    .sort((a, b) => {
      return a.power - b.power;
    })
    .sort((a, b) => {
      return a.cost - b.cost;
    });
};
