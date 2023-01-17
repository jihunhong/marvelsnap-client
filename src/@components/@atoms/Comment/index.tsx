import Avatar from '@atoms/Avatar';
import * as S from './style';

const Comment = ({ writer, content }: any) => {
  return (
    <S.Comment>
      <div className="header">
        <Avatar width={20} height={20} src="https://avatars.githubusercontent.com/u/21700764?v=4" />
        <h4>{writer}</h4>
        <span>2일 전</span>
      </div>
      <div className="body">
        <p>{content}</p>
      </div>
    </S.Comment>
  );
};

export default Comment;
