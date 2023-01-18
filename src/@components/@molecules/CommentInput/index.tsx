import Button from '@atoms/Button';
import Textarea from '@atoms/Textarea';
import useInput from '@hooks/useInput';
import usePostComment from '@query/usePostComment';
import { BsChatDots } from 'react-icons/bs';
import * as S from './style';

type CommentInputProps = {
  collectionId: string;
  id: string;
  name: string;
};

const CommentInput = ({ collectionId, id, ...props }: CommentInputProps) => {
  const [value, handler] = useInput();
  const [onClick] = usePostComment({ collectionId, recordId: id, content: value });
  return (
    <S.CardCommentContainer>
      <Textarea placeholder={`"${props?.name}"에 관한 의견을 남겨보세요`} onChange={handler} value={value} />
      <Button icon={<BsChatDots />} colorType="success" onClick={onClick}>
        <span>등록</span>
      </Button>
    </S.CardCommentContainer>
  );
};

export default CommentInput;
