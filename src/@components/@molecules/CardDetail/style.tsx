import { TagContainer } from '@atoms/Tag/style';
import styled from 'styled-components';

export const CardDetailContainer = styled.section`
  padding: var(--card-offset) 0;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-rows: 40px 40px 30px 94px 42px;
  grid-row-gap: 14px;
  p.name {
    font-size: 2rem;
    font-weight: 600;
  }
  p.effect {
    font-style: italic;
  }
  ${TagContainer} {
    margin-right: 6px;
  }
`;
