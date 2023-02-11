import Image from 'next/image';

const Logo = ({ width = 103, height = 37 }: { width?: number; height?: number }) => {
  return <Image src={'/logo.svg'} width={width} height={height} alt="snapsco logo" />;
};

export default Logo;
