import { SyntheticEvent } from 'react';
import { useSetRecoilState } from 'recoil';
import { removeSelector } from 'src/@store/builder';

const useRemoveItem = () => {
  const setRemove = useSetRecoilState(removeSelector);
  const onClick = (e: SyntheticEvent) => {
    if (!(e.currentTarget instanceof HTMLDivElement)) {
      return;
    }
    const { id } = e.currentTarget.dataset;
    if (id) {
      setRemove(id);
    }
  };

  return [onClick];
};

export default useRemoveItem;
