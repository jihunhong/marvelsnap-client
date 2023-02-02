import { useRouter } from 'next/router';
import { SyntheticEvent, useEffect } from 'react';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { filterAtom, filterSelector } from 'src/@store/cardList';

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
    const { type } = e.currentTarget.dataset;
    const { value } = e.currentTarget.dataset;
    const direction = e.currentTarget.dataset?.direction;
    if (type && value) {
      setFilter(() => {
        return {
          type,
          value,
          direction,
        };
      });
    }
  };

  return [onClick];
};

export default useCardFilter;
