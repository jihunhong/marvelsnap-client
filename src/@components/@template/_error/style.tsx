import { FlexColumn, FlexRow } from '@atoms/Flex/style';
import styled from 'styled-components';

export const ErrorTemplateContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 2rem 0;
  padding: var(--header-height) 0;
  ${FlexColumn} {
    align-items: flex-start;
    p {
      margin-bottom: 0.5rem;
      font-weight: 600;
    }
    span {
      font-size: 4rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
  }
`;
