import * as S from './style';
import dompurify from 'dompurify';

const RawHtml = ({ content }: { content: string | null }) => {
  return (
    <S.RawHtmlContainer
      className="raw-html"
      dangerouslySetInnerHTML={{
        __html: dompurify.sanitize(String(content)),
      }}
    />
  );
};

export default RawHtml;
