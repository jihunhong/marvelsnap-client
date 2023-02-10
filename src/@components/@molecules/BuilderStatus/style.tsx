import styled from 'styled-components';

export const BuilderStatusContainer = styled.section`
  > * {
    width: 100%;
  }

  .content {
    display: grid;
    grid-template-rows: 515px 1fr;
    row-gap: 10px;
    min-height: var(--min-height);
    padding-top: 50px;
  }

  button {
    &.filter {
      width: 44px;
      margin-left: 0;
      margin-right: auto;
      padding: 4px 10px;
      svg {
        margin: 0;
      }
    }
    width: 100%;
    justify-content: center;
  }
`;
