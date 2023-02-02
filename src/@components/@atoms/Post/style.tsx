import { AvatarContainer } from '@atoms/Avatar/style';
import styled from 'styled-components';

export const PostPreviewContainer = styled.article`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: 1fr 200px;
  column-gap: 34px;
  margin-bottom: 2rem;

  .meta {
    div.writer {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      ${AvatarContainer} {
        margin-right: 8px;
      }
    }
    h4 {
      font-weight: 500;
    }
    h2 {
      margin-bottom: 4px;
    }
    h3 {
      font-weight: 400;
    }
  }
`;
