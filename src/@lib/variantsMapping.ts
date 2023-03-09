import { baseImgix } from '@constant/imigx';
import { Card, IVariantsAtom } from '@customTypes/index';

const SOURCE_WIDTH = 714;

const variantsMapping = (json: Card): IVariantsAtom => {
  if (json?.expand.variants?.length) {
    const variantsIds = json.expand.variants.map(v => {
      return `${baseImgix}/variants/${json.cardDefId}/${v.id}.webp?w=${SOURCE_WIDTH}&auto=format`;
    });
    const origin = `${baseImgix}/cards/basic/${json.cardDefId}.webp?w=${SOURCE_WIDTH}&auto=format`;
    const variantSource = [origin, ...variantsIds];
    return {
      variantSource,
      thumbnailSource: json.expand.variants.map(v => v.id),
    };
  }
  return {
    variantSource: [],
    thumbnailSource: [],
  };
};

export default variantsMapping;
