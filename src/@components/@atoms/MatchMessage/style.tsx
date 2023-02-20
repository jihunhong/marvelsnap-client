import { DividerContainer } from '@atoms/Divider/style';
import { FlexColumn, FlexRow } from '@atoms/Flex/style';
import { TagContainer } from '@atoms/Tag/style';
import styled from 'styled-components';

export const MatchMessageContainer = styled.div`
  .grid {
    display: grid;
    grid-template-columns: 48px 1rem 1fr;
    grid-template-areas: 'profile offset message';
    ${FlexColumn} {
      grid-area: message;
      max-width: 300px;
      border-radius: 6px;
      background: #222;
      box-shadow: 4px 7px 0px hsla(0, 0%, 0%, 0.14), 0px 1px 18px 0px hsla(0, 0%, 0%, 0.12), 0px 3px 5px -1px hsla(0, 0%, 0%, 0.2);
      padding: 0.6rem 0.6rem;
      align-items: flex-start;
    }
    span {
      font-weight: 600;
    }
  }

  ${FlexRow} {
    width: 100%;
  }
  .date-time {
    margin-left: auto;
    font-size: 0.8rem;
  }

  ${TagContainer} {
    background: #333;
  }
  ${DividerContainer} {
    margin: 6px 0 8px;
  }
`;
