import { baseImgix } from '@constant/imigx';

type loaderProps = {
  src: string;
  width?: number;
  height?: number;
  quailty?: number;
};
export const cardLoader = ({ src, width, height, quailty = 100 }: loaderProps) => {
  return `${baseImgix}/cards/basic/${src?.toLowerCase().replaceAll(' ', '-')}.webp?w=${width}`;
};

export const variantLoader = ({ src, width, height }: loaderProps) => {
  return `${baseImgix}/variants/${src}.webp?w=${width}`;
};
