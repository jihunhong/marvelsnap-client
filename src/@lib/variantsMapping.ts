import { baseImgix } from '@constant/imigx';
import { Card } from '@customTypes/Card';

const WIDTH = 864;

const variantsMapping = (json: Card) => {
  if (Array.isArray(json?.expand?.variants)) {
    const variantsIds = json?.expand?.variants?.map(v => {
      return `${baseImgix}/variants/${json.cardDefId}/${v.id}.webp?w=${WIDTH}&auto=format`;
    });
    const origin = `${baseImgix}/cards/basic/${json.cardDefId}.webp?w=${WIDTH}&auto=format`;
    const variants = [origin, ...variantsIds];
    return variants;
  }
  return [];
};

export default variantsMapping;
