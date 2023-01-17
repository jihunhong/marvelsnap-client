import Button from '@atoms/Button';
import Textarea from '@atoms/Textarea';
import { BsChatDots } from 'react-icons/bs';
import * as S from './style';

const CommentInput = ({ ...props }: any) => {
  return (
    <S.CardCommentContainer>
      <Textarea placeholder={`${props?.name}에 관한 의견을 남겨보세요`} />
      <Button icon={<BsChatDots />} colorType="success">
        <span>등록</span>
      </Button>
    </S.CardCommentContainer>
  );
};

export default CommentInput;
