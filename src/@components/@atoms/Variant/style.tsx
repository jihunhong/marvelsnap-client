import styled from 'styled-components';

export const VariantContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    width: 127%;
    margin-bottom: 4px;
    :hover {
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform: scale(1.05);
    }
  }
`;
