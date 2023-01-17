import { ReactNode } from 'react';
import { SliderContainer } from './style';

type SliderProps = {
  dataSource: any[];
  renderItem: () => ReactNode;
  occupy: string | number;
  gap: number;
  children: JSX.Element | Array<JSX.Element> | null;
};

const Slider = ({ dataSource = [], renderItem = () => <></>, occupy = 240 / 320, gap = 12, children = null }: SliderProps) => {
  return (
    <SliderContainer $occupy={occupy} $gap={gap}>
      <ul className="list">
        {dataSource?.length > 0 ? dataSource?.map(renderItem) : null}
        {children}
      </ul>
    </SliderContainer>
  );
};

export default Slider;
