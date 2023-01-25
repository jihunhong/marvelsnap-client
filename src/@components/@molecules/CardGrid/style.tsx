import CardImage from '@atoms/CardImg';
import styled from 'styled-components';

export const CardGridContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(6, 1fr);
  img {
    width: 100%;
  }
`;
