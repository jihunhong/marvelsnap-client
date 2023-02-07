import styled from 'styled-components';

export const DeckCodeContainer = styled.div`
  position: relative;
  > * {
    cursor: pointer;
  }
  input {
    padding: 0 6.6rem 0 2rem;
    width: 100%;
    height: inherit;
    border-radius: 4px;
    border: 2px solid rgb(0 183 150 / 70%);
    // box-shadow: rgb(14 139 116 / 70%) 0px 5px, rgb(46 240 148 / 30%) 0px 10px;
  }
  svg {
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translate(0, -50%);
  }
  span {
    background: linear-gradient(180deg, #19cda3 0%, #0cb186 100%);
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
    border-radius: 3px;
    position: absolute;
    right: 3px;
    padding: 5px 5px;
    font-size: 0.8rem;
    font-weight: 700;
    top: 50%;
    transform: translate(0, -50%);
  }
`;
