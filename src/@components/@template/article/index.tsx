import CommentInput from '@molecules/CommentInput';
import Comments from '@molecules/Comments';
import dynamic from 'next/dynamic';
import * as S from './style';

const RawHtml = dynamic(() => import('@atoms/RawHtml'), {
  ssr: false,
});

type ArticleTemplateProps = {
  data?: any;
};

const ArticleTemplate = ({ data }: ArticleTemplateProps) => {
  return (
    <S.ArticleTemplateContainer>
      <div className="header"></div>
      <div className="contents">
        <RawHtml content={data?.content} />
      </div>
      <div className="actions">
        <CommentInput {...data} />
        <Comments {...data} />
      </div>
    </S.ArticleTemplateContainer>
  );
};

export default ArticleTemplate;
