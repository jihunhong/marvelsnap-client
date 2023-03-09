import { baseImgix } from '@constant/imigx';

type loaderProps = {
  src: string;
  width?: number;
  quailty?: number;
};
export const cardLoader = ({ src, width }: loaderProps) => {
  return `${baseImgix}/cards/basic/${src}.webp?w=${width}&auto=format`;
};

export const variantLoader = ({ src, width }: loaderProps) => {
  return `${baseImgix}/variants/${src}.webp?w=${width}&auto=format`;
};

export const variantThumbnailLoader = ({ src, width }: loaderProps) => {
  return `/variants/${src}.webp?w=${width}&auto=format`;
};
