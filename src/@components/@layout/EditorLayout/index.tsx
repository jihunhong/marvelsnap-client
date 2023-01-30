import { ReactElement } from 'react';
import * as S from './style';

type EditorLayoutProps = {
  children: Array<JSX.Element> | ReactElement;
};

const EditorLayout = ({ children }: EditorLayoutProps) => {
  return <S.EditorLayoutContainer className="full-width">{children}</S.EditorLayoutContainer>;
};

export default EditorLayout;
