import { AvatarContainer } from '@atoms/Avatar/style';
import styled from 'styled-components';

export const Comment = styled.article`
  position: relative;
  > div {
    display: flex;
    align-items: center;
  }
  .header {
    padding-top: 12px;
  }
  .header {
    svg,
    ${AvatarContainer} {
      margin-right: 12px;
    }
    h4 {
      margin-right: 12px;
    }
    span {
      font-size: 0.8rem;
      color: var(--gray-1);
    }
  }
  --avatar-width: 29px;
  .body {
    padding: 12px 0 16px var(--avatar-width);
  }
  .actions {
    position: absolute;
    top: 12px;
    right: 0;
    width: auto;
    height: auto;
  }
  border-bottom: 1px rgb(255 255 255 / 5%) solid;
`;
