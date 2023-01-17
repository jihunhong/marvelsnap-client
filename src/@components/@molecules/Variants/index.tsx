import Card from '@atoms/Card';
import Slider from '@atoms/Slider';
import * as S from './style';

const Variants = () => {
  return (
    <S.VariantsContainer>
      <Slider occupy={'14%'} dataSource={Array.from({ length: 15 })} renderItem={() => <Card />} />
    </S.VariantsContainer>
  );
};

export default Variants;
