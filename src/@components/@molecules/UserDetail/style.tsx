import styled from 'styled-components';

export const UserDetailMenuContainer = styled.details`
  cursor: pointer;
  position: relative;
  width: 20px;
  height: 20px;
  summary {
    &::marker {
      display: none;
      content: '';
    }
  }
  --border-color: rgb(77 77 77);

  &[open] div.menu {
    opacity: 1;
    margin-top: 1rem;
    width: 180px;
    position: absolute;
    top: 100%;
    left: auto;
    right: -10px;
    background-color: var(--black-0);
    overflow: hidden;
    border-radius: 4px;
    border: 1px solid var(--border-color);
    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      left: auto;
      right: 9px;
      top: -16px;
    }
    color: var(--white);
    > div {
      transition: opacity, background-color 0.3s ease;
      opacity: 0.6;
      &:hover {
        opacity: 1;
        background-color: var(--black-1);
      }
      width: 100%;
      height: 42px;
      padding: 0px 16px;
      font-size: 0.8rem;
      font-weight: 500;
      color: var(--white);
      display: flex;
      align-items: center;
      a {
        width: 100%;
      }
    }
  }
`;
