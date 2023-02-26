import CommentInput from '@molecules/CommentInput';
import Comments from '@molecules/Comments';
import dynamic from 'next/dynamic';
import * as S from './style';
import '@uiw/react-markdown-preview/markdown.css';
import '@uiw/react-md-editor/markdown-editor.css';

const Markdown = dynamic(() => import('@uiw/react-markdown-preview/lib/index'), { ssr: false });

type ArticleTemplateProps = {
  data?: any;
};

const ArticleTemplate = ({ data }: ArticleTemplateProps) => {
  return (
    <S.ArticleTemplateContainer>
      <div className="header"></div>
      <div className="contents">
        <Markdown source={data?.content} style={{ backgroundColor: 'var(--black-background)' }} />
      </div>
      <div className="actions">
        <CommentInput {...data} />
        <Comments {...data} />
      </div>
    </S.ArticleTemplateContainer>
  );
};

export default ArticleTemplate;
