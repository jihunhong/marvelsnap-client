import useBlockNotify from '@hooks/notify/useBlockNotify';
import { SyntheticEvent } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { addSelector, deckStatusAtom } from 'src/@store/builder';

const useBuilder = () => {
  const status = useRecoilValue(deckStatusAtom);
  const setDeckStatus = useSetRecoilState(addSelector);
  const blockNotify = useBlockNotify();
  const onClick = (e: SyntheticEvent) => {
    if (!(e.currentTarget instanceof HTMLDivElement)) {
      return;
    }
    const duplicate = status.find(item => item.id === e.currentTarget.dataset?.id);
    if (status.length >= 12) {
      blockNotify.blockDeckAmount();
      return;
    }
    if (duplicate) {
      blockNotify.blockDuplicateCard();
      return;
    }
    setDeckStatus({ ...e.currentTarget.dataset });
  };

  return [onClick];
};

export default useBuilder;
