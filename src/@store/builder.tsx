import { Card } from '@customTypes/Card';
import { atom, selector } from 'recoil';

export const deckStatusAtom = atom<Card[]>({
  key: 'deckStatus',
  default: [],
});

export const addSelector = selector({
  key: 'addDeckItem',
  get: () => {},
  set: ({ get, set }, newItem) => {
    const current = get(deckStatusAtom);

    const newState = [...current, newItem];
    const duplicate = current?.find(v => v.id === newItem.id);
    if (duplicate) {
      alert('중복된 카드로 덱을 구성할 수 없습니다');
      return;
    }
    if (newState?.length > 12) {
      alert('덱은 최대 12장으로 구성해야 합니다!');
      return;
    }
    set(
      deckStatusAtom,
      newState?.sort((a, b) => a.cost - b.cost),
    );
  },
});

export const removeSelector = selector({
  key: 'removeDeckItem',
  get: () => {},
  set: ({ get, set }, specificId) => {
    const current = get(deckStatusAtom);
    const newState = current.filter(item => item.id !== specificId);
    set(deckStatusAtom, newState);
  },
});
