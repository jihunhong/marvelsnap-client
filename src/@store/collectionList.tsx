import { CollectionCard } from '@customTypes/CollectionCard';
import { Filter } from '@customTypes/Filter';
import { filtering } from '@lib/filter';
import { atom, selector } from 'recoil';
import { v1 } from 'uuid';

export const collectionListAtom = atom<CollectionCard[]>({
  key: `collectionList/${v1()}`,
  default: [],
});

export const seriesCollectionListAtom = atom<CollectionCard[]>({
  key: `seriesCollectionListAtom/${v1()}`,
  default: [],
});

export const ownCollectionListAtom = atom<CollectionCard[]>({
  key: `ownCollectionListAtom/${v1()}`,
  default: [],
});

export const filterAtom = atom<Filter | null>({
  key: `filter/${v1()}`,
  default: null,
});

export const collectionSelector = selector({
  key: `collectionSelector/${v1()}`,
  get: ({ get }) => {
    const filter = get(filterAtom);
    const ownCollection = get(ownCollectionListAtom);
    const seriesCollection = get(seriesCollectionListAtom);
    const collection = filter?.type === 'own' ? ownCollection : seriesCollection;
    return collection;
  },
});

export const filterSelector = selector({
  key: `selectFilters/${v1()}`,
  get: () => {},
  set: ({ get, set }, newFilter) => {
    const collection = collectionListAtom;
    const ownCollection = ownCollectionListAtom;
    const seriesCollection = seriesCollectionListAtom;
    if (newFilter.type === 'own') {
      const target = get(collection);
      const result = filtering(target, newFilter);
      set(filterAtom, newFilter);
      set(ownCollection, result);
    } else if (newFilter.type === 'grade') {
      const target = get(ownCollection).length ? get(ownCollection) : get(collection);
      console.log(target);
      const result = filtering(target, newFilter);
      set(filterAtom, newFilter);
      set(seriesCollection, result);
    }
  },
});

/**
 * own 필터 => 원본 collection을 필터링
 * 시리즈 필터 => ownFilteredCollection ? ownFilteredCollection : filteredCollection
 */
