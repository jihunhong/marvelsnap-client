import { IVariantsAtom } from '@customTypes/index';
import variantsMapping from '@lib/variantsMapping';
import { atom, selector } from 'recoil';
import { v1 } from 'uuid';

export const variantsAtom = atom<IVariantsAtom>({
  key: `variants/${v1()}`,
  default: {
    variantSource: [],
    thumbnailSource: [],
  },
});

export const variantsSelector = selector({
  key: `variantsSelector/${v1()}`,
  get: () => {},
  set: ({ get, set }, param) => {
    const result = variantsMapping(param);
    set(variantsAtom, result);
  },
});
