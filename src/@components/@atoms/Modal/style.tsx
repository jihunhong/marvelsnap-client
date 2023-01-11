import styled from 'styled-components';

export const ModalBaseContainer = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  right: 50%;
  margin: 0;
  transform: translate(-50%, -50%);
  width: 480px;
  border: none;
  outline: none;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(45deg, #232525 0%, #232525 100%);
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%), 0px 4px 4px rgb(0 0 0 / 25%);
  border: 1px solid rgb(255 255 255 / 5%);
  z-index: 3000;
  &::backdrop {
    background: rgb(0 0 0 / 0.4);
    // backdrop-filter: blur(3px);
    // TODO :: toast ui에 z-index 이슈
  }
`;
