import { atom, selector, selectorFamily } from 'recoil';
import { v1 } from 'uuid';

export const modalAtom = atom({
  key: `modal/${v1()}`,
  default: {
    postDeck: false,
  },
});

export const modalStatus = selectorFamily({
  key: `modalStatus/${v1()}`,
  get:
    (param: string) =>
    ({ get }) => {
      const modalState = get(modalAtom);
      return modalState[param];
    },
});

export const modalToggler = selector({
  key: `modalToggler/${v1()}`,
  get: () => {},
  set: ({ get, set }, key) => {
    // atom에 선언되어있는 객체를 key값만 받아 상태 변경(toggle)
    const modalState = get(modalAtom);
    if (!Object.keys(modalState).includes(key)) {
      console.error('Unrecognized Modal Key => ', key);
    }
    const newState = {
      ...modalState,
      [key]: !modalState[key],
    };
    set(modalAtom, newState);
  },
});
