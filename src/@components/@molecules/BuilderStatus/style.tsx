import { motion } from 'framer-motion';
import styled from 'styled-components';

export const BuilderStatusContainer = styled(motion.section)`
  > * {
    width: 100%;
  }

  .content {
    display: grid;
    grid-template-rows: 515px 1fr;
    row-gap: 10px;
    min-height: var(--min-height);
    padding-top: 42px;
  }

  button {
    &.filter {
      width: 44px;
      margin-left: 0;
      margin-right: auto;
      padding: 4px 10px;
      svg {
        margin: 0;
      }
    }
    width: 100%;
    justify-content: center;
  }
`;
