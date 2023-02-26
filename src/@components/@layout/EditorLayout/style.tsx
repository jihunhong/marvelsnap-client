import { InputContainer } from '@atoms/Input/style';
import { RawHtmlContainer } from '@atoms/RawHtml/style';
import { CardGridContainer } from '@molecules/CardGrid/style';
import device from '@styles/devices';
import styled, { css } from 'styled-components';

const AdminCss = css`
  div[data-color-mode='dark'] {
    height: 80%;
  }
  div[data-color-mode='dark'] > div[class*='editor'] {
    height: 100%;
  }
  .wmde-markdown {
    background-color: var(--black-background);
    padding: 0.8rem 1rem;
    border-radius: 6px;
  }
  .preview {
    h2 {
      margin-bottom: 1rem;
    }
  }
  .post-info {
    margin-bottom: 1rem;
  }
  .wmde-markdown .card {
    display: grid;
    grid-template-rows: 246px 1.5rem 1rem;
    max-width: 300px;

    > img {
      width: 246px;
      height: 246px;
      background-color: unset;
      margin: auto;
    }
    p {
      color: var(--gray-1);
      font-size: 0.7rem;
      font-style: italic;
    }
  }
  center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const EditorLayoutContainer = styled.section`
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    display: grid;
    grid-auto-flows: column;
    grid-template-columns: 1fr 1fr;
  }

  .editor,
  .preview {
    display: flex;
    padding: 2rem;
    flex-direction: column;
  }

  .editor {
    position: sticky;
    top: 0;
    height: 100vh;
    padding: 2rem 2rem 6rem;
    ${CardGridContainer} {
      grid-auto-flow: row;
      grid-template-rows: 1fr;
      grid-template-columns: repeat(12, 1fr);
      padding: 1rem 0;
    }
    ${InputContainer} {
      height: 40px;
    }
    .quill {
      height: 100%;
    }
    .actions {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 4rem;
      padding: 1rem 2rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      background-color: #323232;
      button {
        margin: 0;
      }
    }
  }
  .preview {
    min-height: 100vh;
    background-color: #262424;

    ${CardGridContainer} {
      margin-top: 2rem;
      margin-bottom: 1rem;
    }

    ${RawHtmlContainer} {
      background: #0f0f0fcc;
      height: auto;
      margin: 24px 0;
      padding: 24px 30px;
      border-radius: 6px;
      color: var(--white);
    }
  }
  ${AdminCss}
`;
