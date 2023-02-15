import styled from 'styled-components';

export const CardContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  :hover {
    position: relative;
    .text-content {
      opacity: 1;
      bottom: 2rem;
    }
    > p {
      opacity: 0;
    }
  }
  img {
    width: 100%;
    margin-bottom: 4px;
  }
  p {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
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

  .text-content {
    opacity: 0;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: var(--black-background);
    padding: 0.4rem;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    p {
      text-align: left;
    }
    .name {
      font-weight: 600;
      color: var(--white);
    }
    .effect {
      font-weight: 600;
      color: var(--gray-0);
      display: block;
      -webkit-box-orient: unset;
      -webkit-line-clamp: unset;
    }
  }
`;
