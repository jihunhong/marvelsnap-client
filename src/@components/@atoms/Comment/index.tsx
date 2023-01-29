import Avatar from '@atoms/Avatar';
import Button from '@atoms/Button';
import { fromNow } from '@lib/day';
import RandomAvatar from 'boring-avatars';
import { BsTrash } from 'react-icons/bs';
import useUser from '@query/useUser';
import * as S from './style';
import useDeleteComment from '@query/useDeleteComment';

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
        {avatarUrl ? <Avatar src={avatarUrl} /> : <RandomAvatar size={20} name={writer} variant="beam" colors={['#FC580C', '#FC6B0A', '#F0AB3D', '#F8872E', '#FFA927', '#FDCA49']} />}
        <h4>{writer}</h4>
        <span>{fromNow(created)}</span>
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
