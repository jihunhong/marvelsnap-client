import styled from 'styled-components';

export const GoogleLoginBtnContainer = styled.div`
  background-color: #efefef;
  height: 50px;
  padding: 16px 18px;
  width: 100%;
  border: none;
  box-shadow: rgb(255 255 255 / 25%) 0px 2px 4px 0px;
  :hover {
    box-shadow: rgb(66 133 244 / 30%) 0px 0px 3px 3px;
  }
  :active {
    transform: scale(0.99);
  }
  display: flex;
  align-items: center;
  border-radius: 3px;
  transition: all 0.3s;
  font-family: Roboto, arial, sans-serif;
  cursor: pointer;
  user-select: none;
  svg {
    float: left;
  }
  span {
    font-size: 16px;
    line-height: 48px;
    text-align: center;
    color: rgba(0, 0, 0, 0.54);
    margin: 0 auto;
    text-shadow: 0px 0px 1px rgb(0 0 0 / 30%);t
  }
`;
