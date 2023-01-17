import { FlexRow } from '@atoms/Flex/style';
import { SeriesIcon, StarIcon } from '@atoms/Icon';
import Tag from '@atoms/Tag';
import { kIds } from '@constant/keywords';
import * as T from '@customTypes/Card';
import Rating from '@molecules/Rating';
import * as S from './style';

const CardDetail = ({ name, effect, en, grade, keywords }: T.Card) => {
  return (
    <S.CardDetailContainer>
      <p className="name">{`${en} - ${name}`}</p>
      <p className="effect">{effect}</p>
      <FlexRow>
        <Tag icon={<SeriesIcon />} data-series={grade}>
          SEREIS {grade}
        </Tag>
        {keywords?.map((item: string) => (
          <Tag data-keyword={kIds[item]} key={item}>
            {kIds[item]}
          </Tag>
        ))}
      </FlexRow>
      <section className="grid">
        <section className="label">
          <h3>카드 평가</h3>
          <h2>2.8</h2>
        </section>
        <section />
        <section className="rating-status">
          <section className="progress-grid">
            <div>
              <StarIcon size={8} />
              <StarIcon size={8} />
              <StarIcon size={8} />
              <StarIcon size={8} />
              <StarIcon size={8} />
            </div>
            <progress max="100" value="70" />
          </section>
          <section className="progress-grid">
            <div>
              <StarIcon size={8} />
              <StarIcon size={8} />
              <StarIcon size={8} />
              <StarIcon size={8} />
            </div>
            <progress max="100" value="50" />
          </section>
          <section className="progress-grid">
            <div>
              <StarIcon size={8} />
              <StarIcon size={8} />
              <StarIcon size={8} />
            </div>
            <progress max="100" value="40" />
          </section>
          <section className="progress-grid">
            <div>
              <StarIcon size={8} />
              <StarIcon size={8} />
            </div>
            <progress max="100" value="20" />
          </section>
          <section className="progress-grid">
            <div>
              <StarIcon size={8} />
            </div>
            <progress max="100" value="7" />
          </section>
        </section>
      </section>
      <div>
        <Rating value={2} />
      </div>
    </S.CardDetailContainer>
  );
};

export default CardDetail;
