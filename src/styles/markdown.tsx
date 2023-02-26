import { css } from 'styled-components';

export const MarkdownCss = css`
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
