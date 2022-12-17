import * as S from './style';

type Props = {
  width?: number;
  height?: number;
  src: string;
  href?: string;
};

const Avatar = ({ width = 20, height = 20, src, href = '/' }: Props) => {
  return (
    <a href={href}>
      <S.ImgTag width={width} height={height} src={src} />
    </a>
  );
};

export default Avatar;
