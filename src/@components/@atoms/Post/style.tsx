import { AvatarContainer } from '@atoms/Avatar/style';
import device from '@styles/devices';
import styled from 'styled-components';

export const PostPreviewContainer = styled.article`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: 1fr;
  @media ${device.tablet} {
    grid-template-columns: 1fr 200px;
  }
  column-gap: 34px;

  .meta {
    div.writer {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      ${AvatarContainer} {
        margin-right: 8px;
      }
    }
    a {
      display: flex;
      flex-direction: column;
      width: 100%;
      &:has(img) {
        width: 20px;
      }
    }
    h4 {
      font-weight: 500;
    }
    h2 {
      margin-bottom: 4px;
      font-size: 1.3rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      @media ${device.tablet} {
        font-size: 1.5rem;
      }
    }
    h3 {
      color: var(--gray-2);
      font-weight: 400;
      font-size: 0.9rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      @media ${device.tablet} {
        font-size: 1rem;
      }
    }
  }
  .thumb-container {
    img {
      display: none;
      object-fit: cover;
      border-radius: 6px;
      @media ${device.tablet} {
        display: block;
      }
    }
  }
`;
