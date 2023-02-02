import { Opacity } from '@styles/transition';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ModalBaseContainer = styled(motion.dialog)`
  position: fixed;
  top: 50%;
  left: 50%;
  right: 50%;
  margin: 0;
  transform: translate(-50%, -50%);
  width: 480px;
  border: none;
  outline: none;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(45deg, #232525 0%, #232525 100%);
  box-shadow: 0 5px 11px 0 rgb(0 0 0 / 18%), 0 4px 15px 0 rgb(0 0 0 / 15%);
  border: 1px solid rgb(255 255 255 / 5%);
  z-index: 3000;
  &::backdrop {
    background: rgb(0 0 0 / 0.4);
    // backdrop-filter: blur(3px);
    // TODO :: toast ui에 z-index 이슈
  }
`;

export const PropsModalContainer = styled(motion.dialog)`
  position: fixed;
  top: 50%;
  left: 50%;
  right: 50%;
  margin: 0;
  transform: translate(-50%, -50%);
  background: #171717;
  box-shadow: 0 5px 11px 0 rgb(0 0 0 / 18%), 0 4px 15px 0 rgb(0 0 0 / 15%);
  border: none;
  outline: none;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  max-height: 70vh;
  max-width: 1280px;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 1px solid rgb(255 255 255 / 1%);
  z-index: 3000;
  &::backdrop {
    background: rgb(0 0 0 / 0.4);
    // backdrop-filter: blur(3px);
    // TODO :: toast ui에 z-index 이슈
  }
  overflowy
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }

  > .header {
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    padding: 18px 2rem;
    align-items: center;
    background-color: rgba(0,0,0,0.65);
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
    backdrop-filter: blur(3px);
    span {
      font-weight: 600;
    }
    svg:nth-child(1) {
      color: var(--white);
      margin-right: 8px;
    }
    svg.closer {
      margin-left: auto;
      cursor: pointer;
      ${Opacity}
    }
  }

  .body {
    padding: 1rem 2rem 1.4rem 2rem;
    overflow: hidden;
    :hover {
      overflow-y: auto;
    }
    .deck-info {
      padding: 0;
    }
  }

  .footer {
    display: flex;
    width: 100%;
    padding: 18px 24px;
    align-items: center;
    background-color: #171717;
    border-top: 1px solid rgba(255,255,255,0.1);
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
    button {
      margin-left: auto;
    }
  }
  
`;
