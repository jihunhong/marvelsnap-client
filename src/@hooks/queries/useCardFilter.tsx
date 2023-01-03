import { SyntheticEvent } from 'react';
import { useSetRecoilState } from 'recoil';
import { selectFilter } from 'src/@store/cardList';

const useCardFilter = (): [(e: SyntheticEvent) => void] => {
  const setFilter = useSetRecoilState(selectFilter);
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
