import { baseImgix } from '@constant/imigx';

const CardImage = ({ en, w = 256, h = 256 }: { en: string; w?: number; h?: number }) => {
  return <img src={`${baseImgix}/cards/basic/${(en || 'aero')?.toLowerCase().replaceAll(' ', '-')}.webp?w=${w}&h=${h}&trim=auto`} loading="lazy" alt={en} />;
};

export default CardImage;
