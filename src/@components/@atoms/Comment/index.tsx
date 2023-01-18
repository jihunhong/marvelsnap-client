import { fromNow } from '@lib/day';
import Avatar from 'boring-avatars';
import * as S from './style';

type CommentProps = {
  writer?: string;
  content: string;
  created: string;
  id: string;
};

const Comment = ({ writer, content, created, id }: CommentProps) => {
  return (
    <S.Comment>
      <div className="header">
        <Avatar size={20} name={id} variant="beam" colors={['#FC580C', '#FC6B0A', '#F0AB3D', '#F8872E', '#FFA927', '#FDCA49']} />
        <h4>{writer}</h4>
        <span>{fromNow(created)}</span>
      </div>
      <div className="body">
        <p>{content}</p>
      </div>
    </S.Comment>
  );
};

export default Comment;
