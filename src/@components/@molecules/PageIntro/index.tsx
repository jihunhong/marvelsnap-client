import * as S from './style';

type Props = {
  title: string;
  description: string;
  bgSource: string;
  children?: JSX.Element;
};

const PageIntro = ({ title = '', description = '', bgSource = '', children }: Props) => {
  return (
    <S.PageIntroContainer className="full-width">
      <S.Background bgSource={bgSource} />
      <div className="header">
        <h1>{title}</h1>
        <h4>{description}</h4>
        {children}
      </div>
    </S.PageIntroContainer>
  );
};

export default PageIntro;
