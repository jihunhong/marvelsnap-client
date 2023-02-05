import { CollectionCard } from '@customTypes/CollectionCard';
import { Filter } from '@customTypes/Filter';
import { atom, selector } from 'recoil';
import { filtering } from '@lib/filter';
import { v1 } from 'uuid';

export const collectionListAtom = atom<CollectionCard[]>({
  key: `collectionList/${v1()}`,
  default: [],
});

export const filteredCollectionListAtom = atom<CollectionCard[]>({
  key: `filteredCollectionList/${v1()}`,
  default: [],
});

export const filterAtom = atom<Filter | null>({
  key: `filter/${v1()}`,
  default: null,
});

export const filterSelector = selector({
  key: `selectFilters/${v1()}`,
  get: () => {},
  set: ({ get, set }, newFilter) => {
    const cards = get(collectionListAtom);
    const result = filtering(cards, newFilter);
    set(filterAtom, newFilter);
    set(filteredCollectionListAtom, result);
  },
});
