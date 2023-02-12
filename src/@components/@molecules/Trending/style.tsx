import { DividerContainer } from '@atoms/Divider/style';
import styled from 'styled-components';

export const TrendingContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 898px;
  ${DividerContainer}:last-child {
    display: none;
  }
`;
