import * as S from './style';
import dompurify from 'dompurify';

const RawHtml = ({ content, className = '' }: { content: string | null; className?: string }) => {
  return (
    <S.RawHtmlContainer
      className={`raw-html ${className}`}
      dangerouslySetInnerHTML={{
        __html: dompurify.sanitize(String(content)),
      }}
    />
  );
};

export default RawHtml;
