import { TagContainer } from '@atoms/Tag/style';
import styled from 'styled-components';

export const CardDetailContainer = styled.section`
  padding: var(--card-offset) 0;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-rows: 40px 40px 30px 94px 42px;
  grid-row-gap: 14px;
  p.name {
    font-size: 1.5rem;
  }
  p.effect {
    font-style: italic;
  }
  ${TagContainer} {
    margin-right: 6px;
  }
  .grid {
    display: grid;
    grid-template-columns: 92px 2fr 2fr;
    width: 100%;
    .label {
      display: flex;
      flex-direction: column;
      margin-left: 0;
      h2 {
        font-size: 60px;
      }
    }
    .rating-status {
      display: grid;
      width: 100%;
      grid-template-rows: repeat(5, 1fr);
      grid-auto-flow: row;
      .progress-grid {
        width: 100%;
        margin-left: auto;
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 50px auto;
        grid-column-gap: 12px;
        align-items: center;
        > div {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        progress {
          width: 100%;
        }
      }
    }
  }
`;
