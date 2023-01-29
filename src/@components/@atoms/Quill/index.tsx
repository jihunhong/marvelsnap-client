import formats from './formats';
import modules from './modules';
import ReactQuill from 'react-quill';

type QuillProps = {
  value: string;
  onChange: (content: string) => void;
  placeholder: string;
};

const Quill = (props: any, { value, onChange, placeholder }: QuillProps) => {
  return <ReactQuill theme="snow" modules={modules} formats={formats} value={value} onChange={onChange} placeholder={placeholder} {...props} />;
};

export default Quill;
