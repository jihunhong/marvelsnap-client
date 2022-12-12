import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  height: inherit;
  position: relative;
  border-bottom: var(--gray-1) 1px solid;
  &:after {
    position: absolute;
    left: 0;
    top: 0px;
    content: '';
    width: 100%;
    height: 100%;
    transition: transform 0.25s;
    transform: scaleX(0);
  }
  &:focus-within {
    :after {
      border-bottom: var(--primary-color) 2px solid;
      transform: scale(1);
    }
  }
`;

export const InputTag = styled.input`
  width: 100%;
  height: inherit;
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  color: #fff;
  caret-color: var(--primary-color);
  ::placeholder {
    color: var(--gray-1);
    font-style: italic;
  }
`;
