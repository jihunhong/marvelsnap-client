import { CardRowContainer } from '@atoms/CardRow/style';
import styled from 'styled-components';

export const DeckPostModalContainer = styled.dialog`
  &[open] {
    position: fixed;
  }
  top: 50%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  width: 480px;
  border: none;
  outline: none;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(45deg, #232525 0%, #232525 100%);
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%), 0px 4px 4px rgb(0 0 0 / 25%);
  border: 1px solid rgb(255 255 255 / 5%);
  z-index: 3000;
  &::backdrop {
    background: rgb(0 0 0 / 0.4);
  }
`;

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
  padding: 2rem 0;

  display: grid;
  grid-template-rows: 21px 1fr;
  row-gap: 12px;

  .deck-data {
    display: grid;
    grid-template-rows: repeat(12, 40px);
    row-gap: 1px;
    border-style: dashed;
    border-color: var(--gray-2);
    padding: 12px;
    border-radius: 6px;
    max-height: 515px;

    ${CardRowContainer} {
        border-style: dashed;
        padding: 2px;
    }
`;

export const Footer = styled.section`
  display: grid;
  grid-template-rows: 23px 1fr;
  row-gap: 12px;
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
