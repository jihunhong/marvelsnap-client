import styled from 'styled-components';

export const MobileHeaderContainer = styled.header`
  position: fixed;
  background-color: #000;
  width: 100%;
  z-index: var(--layer-header);
  height: var(--header-height);
  > div {
    width: 100%;
    height: 100%;
    padding: 1rem 2.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
      color: rgb(255 255 255 / 80%);
    }
    a:has(svg#logo) {
      width: 130px;
      opacity: 0.9;
      #logo {
        width: 100%;
      }
    }
  }
`;
