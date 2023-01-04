import { SyntheticEvent } from 'react';
import { useSetRecoilState } from 'recoil';
import { deckSelector } from 'src/@store/builder';

const useBuilder = () => {
  const setDeckStatus = useSetRecoilState(deckSelector);
  const onClick = (e: SyntheticEvent) => {
    if (!(e.currentTarget instanceof HTMLDivElement)) {
      return;
    }
    setDeckStatus({ ...e.currentTarget.dataset });
  };

  return [onClick];
};

export default useBuilder;
