import dompurify from 'dompurify';

const RawHtml = ({ content }: { content: string }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: dompurify.sanitize(String(content)),
      }}
    />
  );
};

export default RawHtml;
