import { Card } from '@customTypes/Card';
import { asc } from '@lib/sort';
import { atom, selector } from 'recoil';
import { cardListAtom } from 'src/@store/cardList';
import { v1 } from 'uuid';

export const deckStatusAtom = atom<Card[]>({
  key: `deckStatus/${v1()}`,
  default: [],
});

export const addSelector = selector({
  key: `addDeckItem/${v1()}`,
  get: () => {},
  set: ({ get, set }, newItem) => {
    const current = get(deckStatusAtom);
    newItem.keywords = [...newItem.keywords?.split(',')];
    const newState = [...current, newItem];
    set(deckStatusAtom, asc(newState));
  },
});

export const getIds = selector({
  key: `getIds/${v1()}`,
  get: ({ get }) => {
    const status = get(deckStatusAtom);
    return status.map(item => item.id);
  },
});

export const pasteDeckStatus = selector({
  key: `pasteDeckStatus/${v1()}`,
  get: () => {},
  set: ({ get, set }, newState) => {
    set(deckStatusAtom, asc(newState));
  },
});

export const removeSelector = selector({
  key: `removeDeckItem/${v1()}`,
  get: () => {},
  set: ({ get, set }, specificId) => {
    const current = get(deckStatusAtom);
    const newState = current.filter(item => item.id !== specificId);
    set(deckStatusAtom, newState);
  },
});
