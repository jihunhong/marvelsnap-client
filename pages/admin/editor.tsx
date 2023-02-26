import Button from '@atoms/Button';
import { InputContainer, InputTag } from '@atoms/Input/style';
import Text from '@atoms/Text';
import useInput from '@hooks/useInput';
import useBeforeUnload from '@hooks/util/useBeforeUnload';
import useMediaQuery from '@hooks/util/useMediaQuery';
import EditorLayout from '@layout/EditorLayout';
import useImageUploadCommand from '@lib/markdown/commands/imageUpload';
import searchCardCommand from '@lib/markdown/commands/searchCardCommand';
import usePostArticle from '@query/usePostArticle';
import usePostDeck from '@query/usePostDeck';
import breakpoints from '@styles/breakpoints';
import '@uiw/react-markdown-preview/markdown.css';
import '@uiw/react-md-editor/markdown-editor.css';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useState } from 'react';
import { BsCheck } from 'react-icons/bs';

const MDEditor = dynamic(() => import('@uiw/react-md-editor/lib/index'), { ssr: false });
const Markdown = dynamic(() => import('@uiw/react-markdown-preview/lib/index'), { ssr: false });

const AdminEditor = () => {
  const [title, handler] = useInput('');
  const [summary, summaryHandler] = useInput('');
  const [thumbnail, thumbnailHandler] = useInput('');
  const [tablet] = useMediaQuery(breakpoints.tablet);
  const [content, onChange] = useState('# article title');
  const [submitArticle] = usePostArticle({ title, summary, thumbnail, content });
  const [imageUploadCommand] = useImageUploadCommand();
  useBeforeUnload();
  return (
    <>
      <Head>
        <meta name="Robots" content="noindex,nofollow" />
      </Head>
      <EditorLayout>
        <div className="editor">
          <div className="post-info">
            <InputContainer>
              <InputTag type="text" placeholder="아티클 제목" value={title as string} onChange={handler} />
            </InputContainer>
            <InputContainer>
              <InputTag type="text" placeholder="summary" value={summary as string} onChange={summaryHandler} />
            </InputContainer>
            <InputContainer>
              <InputTag type="text" placeholder="thumbnail" value={thumbnail as string} onChange={thumbnailHandler} />
            </InputContainer>
          </div>
          <div className="container" data-color-mode="dark">
            <MDEditor value={content} height={null} onChange={onChange} preview="edit" extraCommands={[searchCardCommand, imageUploadCommand]} />
          </div>
          <div className="actions">
            <Button colorType="success" icon={<BsCheck />} onClick={submitArticle}>
              <span>등록</span>
            </Button>
          </div>
        </div>
        {tablet ? null : (
          <div className="preview">
            <Text content={title || '아티클 제목이 표시됩니다'} as="h2" />
            <Text content={summary || 'Summary가 표시됩니다'} as="h2" />
            <Text content={thumbnail || '썸네일 Url이 표시됩니다'} as="h2" />
            <Markdown source={content} style={{ backgroundColor: 'var(--black-background)' }} />
          </div>
        )}
      </EditorLayout>
    </>
  );
};

export default AdminEditor;
