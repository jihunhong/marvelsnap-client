import { Card } from '@customTypes/Card';
import { atom, selector } from 'recoil';
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

    const newState = [...current, newItem];
    set(
      deckStatusAtom,
      newState?.sort((a, b) => a.cost - b.cost),
    );
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
