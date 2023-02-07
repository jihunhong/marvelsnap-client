import Image from 'next/image';
import * as S from './style';

type Props = {
  title: string;
  description: string;
  bgSource: string;
  objectPosition?: string;
  children?: JSX.Element;
};

const PageIntro = ({ title = '', description = '', bgSource = '', objectPosition = 'center top', children }: Props) => {
  return (
    <S.PageIntroContainer className="full-width">
      <S.Background>
        <Image src={bgSource + '?format=auto'} layout="fill" priority objectFit="cover" objectPosition={objectPosition} alt="page-header" />
      </S.Background>

      <div className="header">
        <h1>{title}</h1>
        <h4>{description}</h4>
        {children}
      </div>
    </S.PageIntroContainer>
  );
};

export default PageIntro;
