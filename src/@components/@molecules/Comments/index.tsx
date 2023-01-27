import Comment from '@atoms/Comment';
import MoreButton from '@atoms/MoreButton';
import useCommentListQuery from '@query/useCommentList';
import * as S from './style';

type CommentsProps = {
  collectionId: string;
  id: string;
};

const Comments = ({ collectionId, id }: CommentsProps) => {
  const { dataSource, handler, isLast } = useCommentListQuery({ collectionId, recordId: id });
  return (
    <S.CommentsContainer>
      {dataSource?.map(item => (
        <Comment key={item?.id} id={item.id} created={item.created} writer={item?.expand?.user?.name} content={item.content} avatarUrl={item?.expand?.user?.avatarUrl} />
      ))}
      {!!isLast ? null : (
        <MoreButton onClick={handler}>
          <span>더보기</span>
        </MoreButton>
      )}
    </S.CommentsContainer>
  );
};

export default Comments;
