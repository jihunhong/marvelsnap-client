import { MatchMessageContainer } from '@atoms/MatchMessage/style';
import styled from 'styled-components';

export const MatchListContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${MatchMessageContainer} {
    margin-bottom: 1rem;
  }
`;
