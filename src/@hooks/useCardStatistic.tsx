import { kIds } from '@constant/keywords';
import { Card } from '@customTypes/Card';
import { Keyword } from '@customTypes/Keyword';

const useCardStatistic = (dataSource: Array<Card>) => {
  const json: Record<Keyword, number> = {
    출현: 0,
    버리기: 0,
    지속: 0,
    파괴: 0,
    이동: 0,
    능력없음: 0,
  };
  for (const el of dataSource) {
    if (el.keywords) {
      const keywords = el.keywords.split(',');
      for (const k of keywords) {
        json[kIds[k]] = (json[kIds[k]] || 0) + 1;
      }
    }
  }

  return [json];
};

export default useCardStatistic;
