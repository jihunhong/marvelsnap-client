import StarIcon from '@atoms/Icon/star';
import useRatingStar from '@hooks/useRatingStar';
import * as S from './style';

type RatingProps = {
  collectionId: string;
  recordId: string;
};

const Rating = ({ collectionId, recordId }: RatingProps) => {
  const { score, select, onClick, onHover } = useRatingStar({ collectionId, recordId });
  return (
    <S.RatingContainer data-value={score || 0} onMouseOut={() => onHover(null)} onClick={onClick} onMouseOver={onHover}>
      {Array.from({ length: 5 }, (v, i) => (
        <StarIcon key={i} size={35} data-score={i + 1} className={select ? String(select >= i + 1) : String(score >= i + 1)} />
      ))}
    </S.RatingContainer>
  );
};

export default Rating;
