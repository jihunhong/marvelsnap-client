import styled from 'styled-components';
import { Opacity } from '../../../styles/transition';

export const CardFilterContainer = styled.section`
  .content {
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    row-gap: 20px;
    align-content: start;
    border-radius: 6px;
    padding: 0.8rem;
    color: #fff;
  }

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
    grid-template-columns: repeat(auto-fill, 27px);
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
