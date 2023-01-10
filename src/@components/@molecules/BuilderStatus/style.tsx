import styled from 'styled-components';
import { CardRowContainer } from 'src/@components/@atoms/CardRow/style';

export const BuilderStatusContainer = styled.section`
  > * {
    width: 100%;
  }

  .content {
    display: grid;
    grid-template-rows: 59px 515px 1fr;
    row-gap: 10px;
    min-height: var(--min-height);
  }

  .deck-data {
    display: grid;
    grid-template-rows: repeat(12, 40px);
    row-gap: 1px;
    border-style: dashed;
    border-color: var(--gray-2);
    padding: 12px;
    border-radius: 6px;
    max-height: 515px;

    > div {
      cursor: pointer;
    }

    ${CardRowContainer} {
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    }
  }

  button {
    &.filter {
      background: transparent;
      border: 2px solid var(--success-color);
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      :hover {
        background: var(--success-light-color);
        border: transparent;
      }
      width: 44px;
      margin-left: auto;
      margin-right: 0;
      padding: 4px 10px;
      svg {
        margin: 0;
      }
    }
    width: 100%;
    justify-content: center;
  }
`;
