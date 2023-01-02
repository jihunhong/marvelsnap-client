import styled from 'styled-components';
import { Opacity } from '@styles/transition';

export const CostContainer = styled.span`
  ${Opacity}
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin: 0;
  background: linear-gradient(
      137.64deg,
      rgb(160, 223, 246) 18.06%,
      rgba(41, 150, 164, 0) 34.86%,
      rgba(41, 150, 164, 0) 67.4%,
      rgb(160, 223, 246) 81.96%
    ),
    radial-gradient(
      39.66% 39.66% at 50% 50%,
      rgb(47, 79, 143) 0%,
      rgb(41, 70, 129) 57.14%,
      rgb(9, 127, 149) 96.28%,
      rgb(45, 165, 183) 100%
    );
  box-shadow: rgb(22 13 51 / 80%) 0px 0px 6px, rgb(0 0 0 / 50%) 0px 0px 3px 1px inset;
  border-radius: 50%;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  line-height: 18px;
`;