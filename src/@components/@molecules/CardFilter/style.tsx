import { Opacity } from '@styles/transition';
import styled from 'styled-components';

export const CardFilterContainer = styled.section`
  .content {
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    row-gap: 20px;
    align-content: start;
    border-radius: 6px;
    padding-top: 42px;
    color: var(--white);
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
      background: var(--white);
    }
  }

  button {
    width: 100%;
    justify-content: center;
    svg {
      margin-right: 8px;
    }
  }
`;

type PickSelectProps = {
  active: string | number | undefined | null;
};

export const SortSelect = styled.div`
  display: grid;
  row-gap: 24px;
  grid-template-columns: 1fr 1fr;
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
  div[data-value='${props => props.active}'] {
    opacity: 1;
  }
  svg {
    vertical-align: middle;
    margin-right: 6px;
  }
`;

export const Folded = styled.div`
  justify-content: flex-start;
  &[data-value='5'] {
    background: linear-gradient(to right, #8d2fc8 0%, #7b1bb5 100%);
  }
  &[data-value='4'] {
    background: linear-gradient(to right, #1660e5 0%, #0a58d4 100%);
  }
  &[data-value='3'] {
    background: linear-gradient(to right, #19cda3 0%, #0cb186 100%);
  }
  &[data-value='2'] {
    background: linear-gradient(to right, #5343b2 0%, #3b2f81 100%);
  }
  &[data-value='1'] {
    background: linear-gradient(to right, #ed5949 0%, #f12711 100%);
  }
`;

type CollectionFoldedProps = {
  $percent?: string;
};

export const CollectionFolded = styled.div<CollectionFoldedProps>`
  justify-content: space-between;
  &[data-value='5'] {
    background: linear-gradient(to right, #8d2fc8 0%, #7b1bb5 ${props => props.$percent || '100'}%, transparent ${props => props.$percent || '100'}%, transparent 100%);
  }
  &[data-value='4'] {
    background: linear-gradient(to right, #1660e5 0%, #0a58d4 ${props => props.$percent || '100'}%, transparent ${props => props.$percent || '100'}%, transparent 100%);
  }
  &[data-value='3'] {
    background: linear-gradient(to right, #19cda3 0%, #0cb186 ${props => props.$percent || '100'}%, transparent ${props => props.$percent || '100'}%, transparent 100%);
  }
  &[data-value='2'] {
    background: linear-gradient(to right, #5343b2 0%, #3b2f81 ${props => props.$percent || '100'}%, transparent ${props => props.$percent || '100'}%, transparent 100%);
  }
  &[data-value='1'] {
    background: linear-gradient(to right, #ed5949 0%, #f12711 ${props => props.$percent || '100'}%, transparent ${props => props.$percent || '100'}%, transparent 100%);
  }
`;

export const PickSelect = styled.div<PickSelectProps>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(27px, 1fr));
  column-gap: 4px;
  :has(${Folded}, ${CollectionFolded}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fit, minmax(27px, 1fr));
    row-gap: 4px;
    div {
      border-radius: 4px;
      justify-content: space-between;
      height: 1.9rem;
      padding: 1rem 0.8rem;
      position: relative;
      ${Opacity}
      display: flex;
      align-items: center;
      span {
        font-size: 0.8rem;
        font-weight: 700;
      }
    }
  }
  div,
  span {
    &[data-value='${props => props.active}'] {
      opacity: 1;
    }
  }
`;
