import { ReactNode } from 'react';
import { SliderContainer } from './style';

type SliderProps = {
  dataSource?: any[];
  renderItem?: (item: any) => ReactNode;
  occupy: string | number;
  gap?: number;
  children?: JSX.Element | Array<JSX.Element>;
};

const Slider = ({ dataSource = [], renderItem = () => <></>, occupy = 240 / 320, gap = 12, children }: SliderProps) => {
  return (
    <SliderContainer $occupy={occupy} $gap={gap}>
      <ul className="list">{dataSource?.length > 0 ? dataSource?.map(renderItem) : children}</ul>
    </SliderContainer>
  );
};

export default Slider;
