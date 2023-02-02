import { kIds } from '@constant/keywords';

const useDeckKeywords = (items: any) => {
  const set = new Set();
  for (const item of items) {
    item.keywords?.forEach(v => set.add(kIds[v]));
  }
  return [Array.from(set)];
};

export default useDeckKeywords;
