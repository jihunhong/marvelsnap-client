import { useLayoutEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { collectionListAtom } from 'src/@store/collectionList';

type Series = { [k: string]: { count: number; mine: number } };

const useCollectionStat = (): undefined | Series => {
  const collection = useRecoilValue(collectionListAtom);
  const [series, setSeries] = useState<Series>();
  useLayoutEffect(() => {
    const map = Array(5)
      .fill(null)
      .map((_, i) => i + 1)
      .reduce((p, c) => {
        p.set(c, { count: 0, mine: 0 });
        return p;
      }, new Map());

    const seriesMap: Map<number, { count: number; mine: number }> = collection.reduce((p, c) => {
      if (c.grade) {
        map.set(c.grade, { count: map.get(c.grade).count + 1, mine: c.mine ? map.get(c.grade).mine + 1 : map.get(c.grade).mine });
      }
      return p;
    }, map);
    setSeries(() => Object.fromEntries(seriesMap));
  }, [collection]);
  return series;
};

export default useCollectionStat;
