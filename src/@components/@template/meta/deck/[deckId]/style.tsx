import { AvatarContainer } from '@atoms/Avatar/style';
import { DeckDetailTemplateContainer } from '@components/@template/deck/[deckId]/style';
import { Opacity } from '@styles/transition';
import styled from 'styled-components';

export const MetaDeckDetailTemplateContainer = styled(DeckDetailTemplateContainer)`
  .profile {
    display: flex;
    align-items: center;
    ${AvatarContainer} {
      margin: 0;
    }
    a[target] {
      ${Opacity}
      margin-left: auto;
    }
  }
`;
