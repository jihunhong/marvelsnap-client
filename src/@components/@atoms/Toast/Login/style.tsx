import { FlexColumn } from '@atoms/Flex/style';
import { LoginModalContainer } from '@molecules/Modal/LoginModal/style';
import styled from 'styled-components';

export const LoginToastContainer = styled.div`
  cursor: pointer;
  ${LoginModalContainer} {
    cursor: auto;
  }
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 30px 1fr;
  grid-template-areas: 'icon text' 'icon text';
  column-gap: 1rem;
  row-gap: 6px;

  svg {
    grid-area: icon;
  }

  ${FlexColumn} {
    align-items: flex-start;
    grid-area: text;
    p {
      font-size: 0.85rem;
      font-weight: 700;
    }
    span {
      font-size: 0.7rem;
      font-weight: 600;
    }
  }
`;
