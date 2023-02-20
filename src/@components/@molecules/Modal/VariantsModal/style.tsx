import device from '@styles/devices';
import styled from 'styled-components';

export const VariantsModalContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  & * {
    user-select: none;
  }

  .image {
    position: relative;
    top: 50%;
    left: 50%;
    width: 512px;
    height: 512px;
    transform: translate(-50%, -60%);
  }

  .header {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    border-radius: 50%;
    background: var(--gray-2);
    width: 56px;
    height: 56px;
}
  }
  .controls {
    position: absolute;
    top: 50%;
    transform: translateY(-60%);
    width: 100vw;
    svg {
      color: var(--white);
      cursor: pointer;
    }
    .prev,
    .next {
      position: absolute;
    }
    .prev {
      left: 1rem;
    }
    .next {
      right: 1rem;
    }
  }

  .preview {
    background-color: var(--black-background);
    padding: 0.6rem 0.3rem;
    border-radius: 6px;
    box-shadow: var(--dark-boxshadow);
    @media ${device.mobileS} {
      display: none;
    }
    @media ${device.tablet} {
      display: block;
    }
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;

    .flex {
      display: flex;
    }
  }

  .active {
    border-bottom: 2px solid var(--white);
  }
`;
