import * as S from './style';
import RandomAvatar from 'boring-avatars';

type Props = {
  width?: number;
  height?: number;
  src?: string;
  href?: string;
  writer?: string;
};

const Avatar = ({ width = 20, height = 20, src, href = '/', writer }: Props) => {
  if (writer && !src) {
    return <RandomAvatar size={20} name={writer} variant="beam" colors={['#FC580C', '#FC6B0A', '#F0AB3D', '#F8872E', '#FFA927', '#FDCA49']} />;
  }
  return (
    <S.AvatarContainer href={href}>
      <S.ImgTag width={width} height={height} src={src} />
    </S.AvatarContainer>
  );
};

export default Avatar;
