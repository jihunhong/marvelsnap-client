import styled from 'styled-components';

export const CardContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    width: 100%;
    margin-bottom: 4px;
    :hover {
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform: scale(1.05);
    }
  }
  p {
    text-align: center;
    &.name {
      font-size: 0.8rem;
      font-weight: 500;
      color: var(--gray-1);
      margin-bottom: 4px;
    }
    &.effect {
      font-size: 0.6rem;
      color: var(--gray-2);
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
  }
`;
