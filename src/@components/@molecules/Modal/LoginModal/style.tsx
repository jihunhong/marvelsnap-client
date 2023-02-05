import { motion } from 'framer-motion';
import styled from 'styled-components';

export const LoginModalContainer = styled(motion.dialog)`
  border: none;
  outline: none;
  padding: 0;
  border-radius: 14px;
  background: linear-gradient(45deg, #232525 0%, #232525 100%);
  box-shadow: 0 5px 11px 0 rgb(0 0 0 / 18%), 0 4px 15px 0 rgb(0 0 0 / 15%);
  &::backdrop {
    background: rgb(0 0 0 / 0.4);
  }
`;
