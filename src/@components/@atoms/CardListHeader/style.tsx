import styled from 'styled-components';

export const CardListHeaderContainer = styled.div`
  background: #1618199c;
  // background: linear-gradient(180deg, var(--black-background), #16181991);
  z-index: var(--layer-header);
  position: sticky;
  top: var(--header-height);
  padding: 6px 0;
  display: flex;
  align-items: center;
  button {
    svg {
      margin: 0;
    }
    :nth-child(1) {
      margin-left: auto;
    }
    :nth-child(2) {
      margin-left: 8px;
      margin-right: 0;
    }
  }
`;
