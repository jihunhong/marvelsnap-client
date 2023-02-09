import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ResultEntry = styled(motion.div)`
  position: absolute;
  width: 100%;
  background: #2e2e2eb3;
  backdrop-filter: blur(4px);
  max-height: 304px;
  top: 48px;
  left: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border: 1px solid rgb(255 255 255 / 5%);

  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: 1fr;

  > div {
    :hover {
      background: #673ab74f;
    }
    a {
      cursor: pointer;
      transition: background 0.3s cubic-bezier(0.4, 0, 1, 1);
      display: grid;
      padding: 0.6rem 1rem;
      grid-template-columns: 60px 1fr;
      grid-template-rows: 1fr;
      grid-column-gap: 0.5rem;

      > img {
        grid-area: image;
        width: 100%;
      }
      span {
        font-weight: 700;
        margin-bottom: 1rem;
      }
      p {
        font-style: italic;
      }
    }
  }
`;
export const InputEntry = styled.div`
  cursor: pointer;
  height: 48px;
`;

export const SearchInputContainer = styled.div`
  width: 100%;
  position: relative;
  input {
    font-size: 1.4rem;
    font-weight: 600;
  }
`;
