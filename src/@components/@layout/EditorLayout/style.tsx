import { InputContainer } from '@atoms/Input/style';
import { RawHtmlContainer } from '@atoms/RawHtml/style';
import { CardGridContainer } from '@molecules/CardGrid/style';
import styled from 'styled-components';

export const EditorLayoutContainer = styled.section`
  display: grid;
  grid-auto-flows: column;
  grid-template-columns: 1fr 1fr;

  .editor {
    position: sticky;
    top: 0;
    height: calc(100vh - var(--header-height));
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

  .editor,
  .preview {
    display: flex;
    padding: 2rem;
    flex-direction: column;
  }
`;
