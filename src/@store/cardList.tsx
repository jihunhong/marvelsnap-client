import { Card } from '@customTypes/Card';
import { Filter } from '@customTypes/Filter';
import { atom, selector } from 'recoil';
import { filtering } from 'src/@lib/filter';

export const cardListAtom = atom<Card[]>({
  key: 'cardList',
  default: [],
});

export const filteredCardListAtom = atom<Card[]>({
  key: 'filteredCardList',
  default: [],
});

export const filterAtom = atom<Filter | null>({
  key: 'filter',
  default: null,
});

export const selectCards = selector<Card[]>({
  key: 'selectCards',
  get: () => {},
  set: ({ set }, newCards: Card[]) => {
    set(cardListAtom, newCards);
  },
});

export const selectFilter = selector({
  key: 'selectFilter',
  get: () => {},
  set: ({ get, set }, newFilter) => {
    const cards = get(cardListAtom);
    const result = filtering(cards, newFilter);
    console.log(newFilter);
    set(filterAtom, newFilter);
    set(filteredCardListAtom, result);
  },
});
