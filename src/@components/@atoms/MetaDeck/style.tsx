import { AvatarContainer } from '@atoms/Avatar/style';
import { DeckContainer } from '@atoms/Deck/style';
import styled from 'styled-components';

export const MetaDeckContainer = styled(DeckContainer)`
  .action {
    display: grid;
    grid-template-columns: 24px 24px;
    column-gap: 1rem;
  }

  .writer {
    display: flex;
    align-items: center;
    margin-left: auto;
    ${AvatarContainer} {
      margin-right: 8px;
    }
  }
`;
