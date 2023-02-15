import styled from 'styled-components';

export const PagesContainer = styled.ul`
  list-style: none;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 32px;
  grid-auto-columns: 24px auto 24px;
  column-gap: 1rem;
  align-items: center;
  justify-content: center;

  .pages {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: 32px;
    grid-auto-columns: 32px;
    column-gap: 8px;
  }
  li {
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
    border-radius: 6px;
    &:hover {
      background-color: #1c1f20;
    }
  }
  svg:not(.disabled) {
    color: var(--white);
  }
  .disabled {
    cursor: not-allowed;
    svg {
      color: var(--gray-2);
    }
  }
  .active {
    border: 1px solid var(--white);
    a {
      color: var(--white);
    }
    &:hover {
      background-color: #1c1f20;
    }
  }
  a {
    color: var(--white);
  }
`;
