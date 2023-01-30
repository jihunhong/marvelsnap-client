import { useMemo } from 'react';
import ReactQuill from 'react-quill';
import formats from './formats';

type QuillProps = {
  value: string;
  onChange: (content: string) => void;
  placeholder: string;
};

const Quill = (props: any, { value, onChange, placeholder }: QuillProps) => {
  const modules = useMemo(() => {
    return {
      toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        ['link'],
      ],
      clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
      },
    };
  }, []);

  return <ReactQuill theme="snow" modules={modules} formats={formats} value={value} onChange={onChange} placeholder={placeholder} {...props} />;
};

export default Quill;
