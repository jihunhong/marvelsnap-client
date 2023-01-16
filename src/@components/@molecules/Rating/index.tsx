import { StarIcon } from '@atoms/Icon';
import useRatingStar from '@hooks/useRatingStar';
import * as S from './style';

const Rating = ({ ref, value = 5 }) => {
  const { score, select, onClick, onHover } = useRatingStar(value);
  return (
    <S.RatingContainer ref={ref} data-value={score} onMouseOut={() => onHover(null)} onClick={onClick} onMouseOver={onHover}>
      {Array.from({ length: 5 }, (v, i) => (
        <StarIcon key={i} size={35} data-score={i + 1} className={select ? String(select >= i + 1) : String(score >= i + 1)} />
      ))}
    </S.RatingContainer>
  );
};

export default Rating;
