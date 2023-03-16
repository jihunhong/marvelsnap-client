import Slider from '@atoms/Slider';
import Variant from '@atoms/Variant';
import * as T from '@customTypes/Variant';
import useImageGroup from '@hooks/action/useImageGroup';
import useModalToggler from '@hooks/modal/useModalToggler';
import dynamic from 'next/dynamic';
import * as S from './style';

type VariantsProps = {
  cardDefId: string;
  dataSource?: Array<T.Variant>;
};

const VariantsModal = dynamic(() => import('@molecules/Modal/VariantsModal'), {
  ssr: false,
});

const Variants = ({ cardDefId, dataSource = [] }: VariantsProps) => {
  const [toggler] = useModalToggler('variants');
  const [selectedIndex, handleClick] = useImageGroup();
  const onClick = (index: number) => {
    toggler();
    handleClick(index - 1);
    // 원본이미지가 맨앞에 하나 위치하기 때문에 하나 더하기
  };

  return (
    <>
      <VariantsModal cardDefId={cardDefId} selectedIndex={selectedIndex} />
      <S.VariantsContainer>
        <Slider occupy={'14%'} dataSource={dataSource} renderItem={(item: T.Variant, index: number) => <Variant onClick={() => onClick(index)} key={item.id} cardDefId={cardDefId} {...item} />} />
      </S.VariantsContainer>
    </>
  );
};

export default Variants;
