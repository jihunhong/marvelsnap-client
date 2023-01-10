import { Card } from '@customTypes/Card';
import { Filter } from '@customTypes/Filter';
import { atom, selector } from 'recoil';
import { filtering } from 'src/@lib/filter';
import { v1 } from 'uuid';

export const cardListAtom = atom<Card[]>({
  key: `cardList/${v1()}`,
  default: [],
});

export const filteredCardListAtom = atom<Card[]>({
  key: `filteredCardList/${v1()}`,
  default: [],
});

export const filterAtom = atom<Filter | null>({
  key: `filter/${v1()}`,
  default: null,
});

export const cardsSelector = selector<Card[]>({
  key: `selectCards/${v1()}`,
  get: () => {},
  set: ({ set }, newCards: Card[]) => {
    set(cardListAtom, newCards);
  },
});

export const filterSelector = selector({
  key: `selectFilters/${v1()}`,
  get: () => {},
  set: ({ get, set }, newFilter) => {
    const cards = get(cardListAtom);
    const result = filtering(cards, newFilter);
    set(filterAtom, newFilter);
    set(filteredCardListAtom, result);
  },
});
