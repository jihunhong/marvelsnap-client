import useNotify from '@hooks/notify/useNotify';
import { decode } from '@lib/deck';
import isClient from '@lib/isClient';
import { ChangeEvent } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { deckStatusAtom, pasteDeckStatus } from 'src/@store/builder';
import { cardListAtom } from 'src/@store/cardList';

const useDeckPaste = () => {
  const cardList = useRecoilValue(cardListAtom);
  const setStatus = useSetRecoilState(pasteDeckStatus);
  const notify = useNotify();
  const handler = (e: ChangeEvent<HTMLInputElement>) => {
    if (isClient()) {
      const value = e.target.value;
      try {
        const decoded = decode(value);
        const status = decoded?.Cards.map(c => {
          const exist = cardList.find(v => v.cardDefId === c.CardDefId);
          return exist;
        });
        setStatus(status);
      } catch (err) {
        console.error(err.message);
        notify.errorDeckCode();
      }
    }
  };

  return [handler];
};

export default useDeckPaste;
