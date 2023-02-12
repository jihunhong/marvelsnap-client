import useUploadImage from '@hooks/action/useUploadImage';
import { useMemo } from 'react';
import ReactQuill from 'react-quill';
import formats from './formats';

type QuillProps = {
  value: string;
  onChange: (content: string) => void;
  placeholder: string;
};

const Quill = (props: any, { value, onChange, placeholder }: QuillProps) => {
  const [imageHandler, ref] = useUploadImage();
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: '1' }, { header: '2' }, { font: [] }],
          [{ size: [] }],
          [{ color: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
          ['link'],
          // ['image'],
        ],
        handlers: {
          // image: imageHandler,
        },
      },
      clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
      },
    };
  }, []);

  return (
    <>
      <ReactQuill theme="snow" modules={modules} formats={formats} value={value} onChange={onChange} placeholder={placeholder} {...props} ref={ref} />
    </>
  );
};

export default Quill;
