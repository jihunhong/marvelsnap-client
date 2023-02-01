import * as T from '@customTypes/Card';

const useDeckTag = ({ items = [] }: { items: Array<T.Card> }) => {
  let max: number = 0;
  for (const item of items) {
    if (item.grade > max) {
      max = item.grade;
      if (max === 5) return 5;
    }
  }
  return max;
};

export default useDeckTag;
