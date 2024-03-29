import styled from 'styled-components';

type CustomProps = {
  colorType: 'primary' | 'secondary' | 'warn' | 'success' | 'plain';
};

export const ButtonTag = styled.button<CustomProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 1rem;
  background-color: var(--${p => p.colorType}-color);
  border: 1px;
  border-style: solid;
  border-color: var(--${p => p.colorType}-color);
  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
  box-shadow: rgb(0 0 0 / 40%) 0px 2px 4px, rgb(0 0 0 / 30%) 0px 7px 13px -3px, rgb(0 0 0 / 20%) 0px -2px 0px inset;
  user-select: none;
  touch-action: manipulation;
  height: 32px;
  padding: 4px 15px;
  color: var(--white);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  margin-right: 8px;
  :hover {
    transform: scale(1.02);
    background-color: var(--${p => p.colorType}-light-color);
    box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px, rgb(0 0 0 / 30%) 0px 7px 20px -3px, rgb(0 0 0 / 20%) 0px -2px 0px inset;
  }
  :active {
    transform: scale(0.95);
    background-color: var(--${p => p.colorType}-color);
    box-shadow: box-shadow: rgb(0 0 0 / 60%) 0px 2px 15px, rgb(0 0 0 / 60%) 0px 7px 20px -3px, rgb(0 0 0 / 20%) 0px -2px 0px inset;
  }

  &:has(span) {
    svg {
      margin-right: 6px;
    }
  }

  span {
    text-align: center;
    font-weight: 500;
  }
`;
