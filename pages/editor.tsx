import Input from '@atoms/Input';
import RawHtml from '@atoms/RawHtml';
import useQuill from '@hooks/useQuill';
import EditorLayout from '@layout/EditorLayout';
import CardGrid from '@molecules/CardGrid';
import dynamic from 'next/dynamic';
import { useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { deckStatusAtom } from 'src/@store/builder';

const Quill = dynamic(() => import('@atoms/Quill'), {
  ssr: false,
});

const Editor = () => {
  const titleRef = useRef();
  const [content, onChange] = useQuill(null);
  const addedCards = useRecoilValue(deckStatusAtom);

  return (
    <EditorLayout>
      <div className="editor">
        <Input placeholder="덱 이름을 입력해주세요" ref={titleRef} />
        <CardGrid expand={{ items: addedCards }} />
        <Quill value={content} onChange={onChange} placeholder="덱 설명을 입력해보세요" />
      </div>
      <div className="preview">
        <h1>{titleRef?.current?.value}</h1>
        <CardGrid expand={{ items: addedCards }} />
        <RawHtml content={content || '글 내용이 표시됩니다'} />
      </div>
    </EditorLayout>
  );
};

export default Editor;
