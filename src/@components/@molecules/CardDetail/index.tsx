import { FlexRow } from '@atoms/Flex/style';
import SeriesIcon from '@atoms/Icon/series';
import Tag from '@atoms/Tag';
import { kIds } from '@constant/keywords';
import * as T from '@customTypes/Card';
import Rating from '@molecules/Rating';
import ScoreDetail from '@molecules/ScoreDetail';
import * as S from './style';

const CardDetail = ({ name, effect, grade, keywords, collectionId, id }: T.Card) => {
  return (
    <S.CardDetailContainer>
      <p className="name">{name}</p>
      <p className="effect">{effect}</p>
      <FlexRow>
        <Tag icon={<SeriesIcon />} data-series={grade}>
          <span>SEREIS {grade}</span>
        </Tag>
        {keywords?.map((item: string) => (
          <Tag data-keyword={kIds[item]} key={item}>
            {kIds[item]}
          </Tag>
        ))}
      </FlexRow>
      <ScoreDetail collectionId={collectionId} recordId={id} title="카드 평가" />
      <div>
        <Rating collectionId={collectionId} recordId={id} value={2} />
      </div>
    </S.CardDetailContainer>
  );
};

export default CardDetail;
