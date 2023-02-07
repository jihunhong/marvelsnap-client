import { Opacity } from '@styles/transition';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const LoginModalContainer = styled(motion.dialog)`
  border: none;
  outline: none;
  padding: 0;
  border-radius: 4px;
  background: linear-gradient(45deg, #232525 0%, #232525 100%);
  border-radius: 6px;
  > div.header {
    position: absolute;
    top: 8px;
    right: 8px;
    svg {
      ${Opacity}
    }
  }
  &::backdrop {
    background: rgb(0 0 0 / 0.4);
  }
`;
