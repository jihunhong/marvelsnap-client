import { createElement } from 'react';

type TextProps = {
  content: string;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';
};

const Text = ({ content, as = 'span' }: TextProps) => {
  const element = createElement(as, null, content);
  return element;
};

export default Text;
