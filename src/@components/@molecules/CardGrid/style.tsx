import { CardContainer } from '@atoms/Card/style';
import { CardImageContainer } from '@atoms/CardImage/style';
import styled from 'styled-components';

export const CardGridContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(6, 1fr);
  ${CardImageContainer} {
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    :hover {
      transform: scale(1.05);
    }
  }
  ${CardContainer} {
    position: relative;
  }
`;
