import { useRouter } from 'next/router';
import { SyntheticEvent, useEffect } from 'react';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { cardListAtom, filterAtom, filterSelector } from 'src/@store/cardList';

const useCardFilter = (): [(e: SyntheticEvent) => void] => {
  const setFilter = useSetRecoilState(filterSelector);
  const resetFilter = useResetRecoilState(filterAtom);
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', url => {
      resetFilter();
    });
  }, [router, resetFilter]);

  const onClick = (e: SyntheticEvent) => {
    if (!(e.target instanceof HTMLDivElement || e.target instanceof HTMLSpanElement)) {
      return;
    }
    const { type } = e.target?.dataset;
    const { value } = e.target?.dataset;
    if (type && value) {
      setFilter(() => {
        return {
          type,
          value,
        };
      });
    }
  };

  return [onClick];
};

export default useCardFilter;
