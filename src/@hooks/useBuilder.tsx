import { SyntheticEvent } from 'react';
import { useSetRecoilState } from 'recoil';
import { addSelector } from 'src/@store/builder';

const useBuilder = () => {
  const setDeckStatus = useSetRecoilState(addSelector);
  const onClick = (e: SyntheticEvent) => {
    if (!(e.currentTarget instanceof HTMLDivElement)) {
      return;
    }
    setDeckStatus({ ...e.currentTarget.dataset });
  };

  return [onClick];
};

export default useBuilder;
