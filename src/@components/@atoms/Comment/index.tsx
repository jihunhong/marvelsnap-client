import Avatar from '@atoms/Avatar';
import Button from '@atoms/Button';
import format from '@lib/day/format';
import useDeleteComment from '@query/useDeleteComment';
import useUser from '@query/useUser';
import { BsTrash } from 'react-icons/bs';
import * as S from './style';

type CommentProps = {
  writer?: string;
  content: string;
  created: string;
  avatarUrl?: string;
  id: string;
  user?: string;
};

const Comment = ({ writer, content, created, id, avatarUrl, user }: CommentProps) => {
  const [me] = useUser();
  const [deleteHandler] = useDeleteComment(id);
  return (
    <S.Comment>
      <div className="header">
        <Avatar src={avatarUrl} writer={writer} />
        <h4>{writer}</h4>
        <span>{format(created)}</span>
      </div>
      <div className="body">
        <p>{content}</p>
      </div>
      {me?.id === user ? (
        <div className="actions">
          <Button icon={<BsTrash />} colorType="warn" onClick={deleteHandler} />
        </div>
      ) : null}
    </S.Comment>
  );
};

export default Comment;
