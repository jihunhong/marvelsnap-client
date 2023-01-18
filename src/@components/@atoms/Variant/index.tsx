import { baseImgix } from '@constant/imigx';
import * as S from './style';

const Variant = ({ name, cardDefId, id }) => {
  return (
    <S.VariantContainer>
      <img src={`${baseImgix}/variants/${cardDefId}/${id}.webp?w=256&h=256`} alt={name} />
    </S.VariantContainer>
  );
};

export default Variant;
