import styled from 'styled-components';

export const ButtonTag = styled.button`
  border-radius: 28px;
  padding: 1rem;
  background-color: var(--primary-color);
  border: none;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s;
  :hover {
    opacity: 1;
  }
`;
