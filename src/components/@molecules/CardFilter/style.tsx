import styled from 'styled-components';
import { Opacity } from '../../../styles/transition';

export const CardFilterContainer = styled.div`
  position: absolute;
  top: 340px;
  right: 230px;
  width: 100%;
  max-width: 300px;
  background: rgb(19 19 19 / 85%);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  display: grid;
  grid-template-columns: 100%;
  row-gap: 20px;
  align-content: start;
  border-radius: 6px;
  padding: 0.8rem;
  color: #fff;

  section.filter {
    display: grid;
    row-gap: 9px;
  }

  .header {
    display: flex;
    align-items: center;

    .title {
      display: flex;
      align-items: center;
      font-size: 12px;
      line-height: 20px;
      font-weight: 500;
      white-space: nowrap;
    }
    .divider {
      width: 100%;
      margin-left: 1rem;
      height: 1px;
      background: #fff;
    }
  }

  .selection {
    display: grid;
    grid-template-columns: repeat(auto-fill, 30px);
    column-gap: 10px;
  }
`;

export const SortSelect = styled.div`
  display: grid;
  row-gap: 12px;
  div {
    display: flex;
    align-items: center;
    ${Opacity}
  }
  svg {
    margin-right: 6px;
  }
`;

export const KeywordSelect = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px 12px;
  div {
    display: flex;
    align-items: center;
    ${Opacity}
  }
  svg {
    vertical-align: middle;
    margin-right: 6px;
  }
`;

export const Cost = styled.div`
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
  span {
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    line-height: 18px;
  }
`;

export const Folded = styled.div`
  border-radius: 4px;
  background: var(--gray-2);
  position: relative;
  ${Opacity}
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    border-width: 0 6px 6px 0;
    border-style: solid;
    border-color: var(--gray-1) rgb(19 19 19 / 85%);
  }
`;
