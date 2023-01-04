import { SyntheticEvent } from 'react';
import { useSetRecoilState } from 'recoil';
import { filterSelector } from 'src/@store/cardList';

const useCardFilter = (): [(e: SyntheticEvent) => void] => {
  const setFilter = useSetRecoilState(filterSelector);
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
