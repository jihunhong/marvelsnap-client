import Button from '@atoms/Button';
import Textarea from '@atoms/Textarea';
import useInput from '@hooks/useInput';
import usePostComment from '@query/usePostComment';
import { useEffect, useRef } from 'react';
import { BsChatDots } from 'react-icons/bs';
import * as S from './style';

type CommentInputProps = {
  collectionId: string;
  id: string;
  name?: string;
  title?: string;
};

const CommentInput = ({ collectionId, id, ...props }: CommentInputProps) => {
  const [value, onChange, setValue] = useInput();
  const [post, onClick, isSuccess] = usePostComment({ collectionId, recordId: id, content: value });
  const tRef = useRef(null);
  useEffect(() => {
    if (tRef.current && isSuccess) {
      setValue(null);
      tRef.current.value = '';
    }
  }, [isSuccess, tRef, setValue]);
  return (
    <S.CardCommentContainer>
      <Textarea ref={tRef} maxLength={480} placeholder={`"${props?.name || props?.title}"에 관한 의견을 남겨보세요`} onChange={onChange} onClick={onClick} value={value} />
      <Button icon={<BsChatDots />} colorType="success" onClick={post}>
        <span>등록</span>
      </Button>
    </S.CardCommentContainer>
  );
};

export default CommentInput;
