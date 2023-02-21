import { RawHtmlContainer } from '@atoms/RawHtml/style';
import styled from 'styled-components';

// prettier - ignore
export const DetailLayoutContainer = styled.section`
  display: flex;
  flex-direction: column;

  .raw {
    ${RawHtmlContainer} {
      p:has(img) {
        display: flex;
        justify-content: center;
      }
    }
  }
`;
