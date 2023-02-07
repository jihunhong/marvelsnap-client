import StarIcon from '@atoms/Icon/star';
import useScoreList from '@query/useScoreList';
import * as S from './style';

type ScoreDetailProps = {
  title: string;
  collectionId?: string;
  recordId?: string;
};

const ScoreDetail = ({ title, collectionId, recordId }: ScoreDetailProps) => {
  const { avg, ratings } = useScoreList({ collectionId, recordId });
  return (
    <S.ScoreDetailContainer>
      <section className="label">
        <h3>{title}</h3>
        <h2>{avg}</h2>
      </section>
      <section className="rating-status">
        <section className="progress-grid">
          <div>
            <StarIcon size={8} />
            <StarIcon size={8} />
            <StarIcon size={8} />
            <StarIcon size={8} />
            <StarIcon size={8} />
          </div>
          <progress max="100" value={ratings?.fifth} />
        </section>
        <section className="progress-grid">
          <div>
            <StarIcon size={8} />
            <StarIcon size={8} />
            <StarIcon size={8} />
            <StarIcon size={8} />
          </div>
          <progress max="100" value={ratings?.fourth} />
        </section>
        <section className="progress-grid">
          <div>
            <StarIcon size={8} />
            <StarIcon size={8} />
            <StarIcon size={8} />
          </div>
          <progress max="100" value={ratings?.third} />
        </section>
        <section className="progress-grid">
          <div>
            <StarIcon size={8} />
            <StarIcon size={8} />
          </div>
          <progress max="100" value={ratings?.second} />
        </section>
        <section className="progress-grid">
          <div>
            <StarIcon size={8} />
          </div>
          <progress max="100" value={ratings?.first} />
        </section>
      </section>
    </S.ScoreDetailContainer>
  );
};

export default ScoreDetail;
