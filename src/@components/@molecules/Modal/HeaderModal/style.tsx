import { AvatarContainer } from '@atoms/Avatar/style';
import { FlexColumn } from '@atoms/Flex/style';
import { GoogleLoginBtnContainer } from '@atoms/GoogleBtn/style';
import { Opacity } from '@styles/transition';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HeaderModalContainer = styled(motion.dialog)`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  width: 60vw;
  height: 100vh;
  max-height: 100vh;
  border: none;
  box-shadow: 0 5px 11px 0 rgb(0 0 0 / 18%), 0 4px 15px 0 rgb(0 0 0 / 15%);
  border: 1px solid rgb(255 255 255 / 5%);
  background-color: #0b080f;
  padding: 40px 2rem;
  &::backdrop {
    background-color: #4f4f4f70;
  }

  .profile {
    ${AvatarContainer} {
      margin-right: 8px;
    }
    ${GoogleLoginBtnContainer} {
      span {
        font-size: 0.6rem;
      }
      padding: 8px 12px;
      height: 40px;
    }
    span {
      font-weight: 700;
    }
    .name {
      color: var(--white);
      font-size: 0.9rem;
    }
    .email {
      color: var(--gray-0);
      font-size: 0.8rem;
    }
    ${FlexColumn} {
      align-items: flex-start;
    }
  }

  nav {
    display: grid;
    grid-auto-rows: 40px;
    a {
      display: flex;
      align-items: center;
      ${Opacity}
      svg {
        margin-right: 8px;
      }
      span {
        font-weight: 700;
      }
    }
  }
`;
