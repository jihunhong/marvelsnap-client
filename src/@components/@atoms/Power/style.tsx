import styled from 'styled-components';

export const PowerContainer = styled.span`
  position: relative;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  line-height: 18px;
  ::before {
    content: '';
    width: 120%;
    height: 120%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(https://static.snap.untapped.gg/_next/static/images/power-container-8ae3ea1b6788bf38eeacdef680c7a26b.webp) no-repeat;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: -1;
  }
`;
