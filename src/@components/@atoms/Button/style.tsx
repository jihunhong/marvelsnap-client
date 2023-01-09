import styled from 'styled-components';

type CustomProps = {
  colorType: 'primary' | 'secondary' | 'warn';
};

export const ButtonTag = styled.button<CustomProps>`
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 1rem;
  background-color: var(--${p => p.colorType}-color);
  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
  box-shadow: rgb(0 0 0 / 40%) 0px 2px 4px, rgb(0 0 0 / 30%) 0px 7px 13px -3px, rgb(0 0 0 / 20%) 0px -2px 0px inset;
  border: none;
  user-select: none;
  touch-action: manipulation;
  height: 32px;
  padding: 4px 15px;
  color: var(--white);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  margin-right: 8px;
  :hover {
    background-color: var(--${p => p.colorType}-light-color);
  }
  svg {
    margin-right: 4px;
  }
`;
