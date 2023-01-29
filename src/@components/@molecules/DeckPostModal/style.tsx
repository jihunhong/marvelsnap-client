import { CardRowContainer } from '@atoms/CardRow/style';
import { DeckRowContainer } from '@molecules/DeckRow/style';
import styled from 'styled-components';

export const DeckPostModalContainer = styled.dialog``;

export const Header = styled.section`
  display: flex;
  flex-direction: column;

  .title {
    width: 100%;
    display: flex;
    margin-bottom: 9px;
    align-items: center;
    svg {
      margin-right: 8px;
    }
  }
  h3 {
    font-size: 0.8rem;
    margin-left: 32px;
    color: var(--gray-2);
  }
`;

export const Body = styled.section`
  padding: 1rem 0;

  display: grid;
  --quill-editor-height: 350px;
  grid-template-rows: 21px 1fr var(--quill-editor-height);
  row-gap: 12px;
  ${DeckRowContainer} {
    > div {
      cursor: unset;
    }
  }
  .grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1fr;
  }

  .quill {
    height: var(--quill-editor-height);
    .ql-container.ql-snow {
      height: 295px;
    }
  }
`;

export const Footer = styled.section`
  display: grid;
  grid-template-rows: 23px 1fr;
  row-gap: 1rem;
  h4 {
    font-weight: 400;
    text-align: center;
    font-style: italic;
    color: var(--gray-2);
  }
  div {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    column-gap: 8px;
    button {
      border-width: 2px;
      margin: 0;
    }
  }
`;
