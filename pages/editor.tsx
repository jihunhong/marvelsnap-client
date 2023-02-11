import Button from '@atoms/Button';
import { InputContainer, InputTag } from '@atoms/Input/style';
import Text from '@atoms/Text';
import useInput from '@hooks/useInput';
import useQuill from '@hooks/useQuill';
import useMediaQuery from '@hooks/util/useMediaQuery';
import EditorLayout from '@layout/EditorLayout';
import CardGrid from '@molecules/CardGrid';
import usePostDeck from '@query/usePostDeck';
import breakpoints from '@styles/breakpoints';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { BsCheck } from 'react-icons/bs';
import { useRecoilValue } from 'recoil';
import { deckStatusAtom } from 'src/@store/builder';

const Quill = dynamic(() => import('@atoms/Quill'), {
  ssr: false,
});
const RawHtml = dynamic(() => import('@atoms/RawHtml'), {
  ssr: false,
});

const Editor = () => {
  const [title, handler] = useInput('');
  const [content, onChange] = useQuill(null);
  const addedCards = useRecoilValue(deckStatusAtom);
  const [postDeck] = usePostDeck(title, content);
  const [tablet] = useMediaQuery(breakpoints.tablet);
  console.log(tablet);

  return (
    <>
      <Head>
        <meta name="Robots" content="noindex,nofollow" />
      </Head>
      <EditorLayout>
        <div className="editor">
          <InputContainer>
            <InputTag type="text" placeholder="덱 제목을 입력해보세요" value={title as string} onChange={handler} />
          </InputContainer>
          <CardGrid expand={{ items: addedCards }} />
          <Quill value={content} onChange={onChange} placeholder="덱 설명을 입력해보세요" />
          <div className="actions">
            <Button colorType="success" icon={<BsCheck />} onClick={postDeck}>
              <span>등록</span>
            </Button>
          </div>
        </div>
        {tablet ? null : (
          <div className="preview ql-snow">
            <Text content={title || '덱 제목이 표시됩니다'} as="h2" />
            <CardGrid expand={{ items: addedCards }} />
            <RawHtml className="ql-editor" content={content || '덱설명이 표시됩니다'} />
          </div>
        )}
      </EditorLayout>
    </>
  );
};

export default Editor;
