import styled from 'styled-components';

export const IntroSectionContainer = styled.div`
  width: 100%;

  .container {
    position: relative;
    display: flex;
    aspect-ratio: 2543 / 531;
    width: 100%;
  }
  .content {
    width: 100%;
    max-width: 1192px;
    position: relative;
    z-index: 2;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h1,
    h3 {
      font-family: Poppins;
    }
    h1 {
      font-size: 106px;
      margin-bottom: 4px;
    }
    h3 {
      margin-bottom: 1rem;
    }
    svg {
      margin-left: 6px;
      vertical-align: middle;
    }
  }

  .owner-link {
    margin-bottom: 1.2rem;
  }

  .input-action {
    width: 100%;
    height: 48px;
  }

  .video-background {
    top: 0px;
    left: 0px;
    z-index: 1;
    position: absolute;
    width: 100%;
    height: auto;
    overflow: hidden;
    aspect-ratio: 2543 / 531;

    > div {
      :before {
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: auto;
        aspect-ratio: 16 / 9;
        background-color: rgb(22 24 25 / 95%);
        z-index: 1;
      }
      display: flex;
      align-items: center;
      height: 100%;
    }
    iframe {
      width: 100%;
      height: auto;
      aspect-ratio: 16 / 9;
    }
  }
`;
