import { atom, selector, selectorFamily } from 'recoil';
import { v1 } from 'uuid';

export const userAtom = atom({
  key: `user/${v1()}`,
  default: null,
});
