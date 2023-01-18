import Slider from '@atoms/Slider';
import Variant from '@atoms/Variant';
import * as S from './style';

type VariantsProps = {
  cardDefId: string;
  dataSource?: Array<any>;
};

const Variants = ({ cardDefId, dataSource = [] }: VariantsProps) => {
  return (
    <S.VariantsContainer>
      <Slider occupy={'14%'} dataSource={dataSource} renderItem={item => <Variant key={item.id} cardDefId={cardDefId} {...item} />} />
    </S.VariantsContainer>
  );
};

export default Variants;
