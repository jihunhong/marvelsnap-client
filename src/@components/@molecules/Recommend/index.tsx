import Button from '@atoms/Button';
import useGetLike from '@query/useGetLike';
import usePostLike from '@query/usePostLike';
import { FiThumbsUp } from 'react-icons/fi';
import * as S from './style';

type RecommendProps = {
  collectionId: string;
  id: string;
};

const Recommend = ({ collectionId, id }: RecommendProps) => {
  const [like] = usePostLike({ collectionId, recordId: id });
  const [count] = useGetLike({ collectionId, recordId: id });
  return (
    <S.RecommendContainer>
      <Button icon={<FiThumbsUp />} colorType="primary" onClick={like}>
        <span>좋아요</span>
      </Button>
    </S.RecommendContainer>
  );
};

export default Recommend;
