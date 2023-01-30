import { Card } from '@customTypes/Card';
import useBlockNotify from '@hooks/notify/useBlockNotify';
import { SyntheticEvent } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { addSelector, deckStatusAtom } from 'src/@store/builder';

const useBuilder = () => {
  const status = useRecoilValue(deckStatusAtom);
  const setDeckStatus = useSetRecoilState(addSelector);
  const blockNotify = useBlockNotify();
  const onClick = (e: SyntheticEvent, item: Card) => {
    // if (!(e.currentTarget instanceof HTMLDivElement)) {
    //   return;
    // }
    e.currentTarget.setAttribute('selected', 'true');
    const duplicate = status.find(el => el.id === item?.id);
    if (status.length >= 12) {
      blockNotify.blockDeckAmount();
      return;
    }
    if (duplicate) {
      blockNotify.blockDuplicateCard();
      return;
    }
    setDeckStatus({ ...item });
  };

  return [onClick];
};

export default useBuilder;
