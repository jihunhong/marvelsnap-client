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
  min-width: 200px;
  max-width: 300px;
  height: 100vh;
  max-height: 100vh;
  border: none;
  box-shadow: 0 5px 11px 0 rgb(0 0 0 / 18%), 0 4px 15px 0 rgb(0 0 0 / 15%);
  border: 1px solid rgb(255 255 255 / 5%);
  background-color: #000;
  padding: 0;

  &::backdrop {
    background-color: #4f4f4f70;
  }

  .profile {
    padding: 1rem 1rem 0 1rem;
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
    grid-auto-rows: 54px;
    a {
      padding: 1rem;
      display: flex;
      align-items: center;
      ${Opacity}
      svg {
        margin-right: 1rem;
      }
      span {
        font-size: 1.2rem;
        font-weight: 700;
      }
    }
    .active {
      opacity: 1;
      background-color: #2d2d2d;
      border-left: 4px solid var(--primary-light-color);
    }
  }
`;
