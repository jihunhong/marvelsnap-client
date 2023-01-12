import styled from 'styled-components';
import { CardRowContainer } from '@atoms/CardRow/style';

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
