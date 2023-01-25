import { baseImgix } from '@constant/imigx';
import styled from 'styled-components';
import { CostContainer } from '../Cost/style';

type customProps = {
  $en: string;
};

export const CardRowContainer = styled.article<customProps>`
  display: flex;
  align-items: center;
  border-radius: 6px;
  border: 1px solid rgb(255 255 255 / 5%);
  height: 40px;
  padding: 8px;

  overflow: hidden;
  position: relative;

  .bg {
    z-index: -1;
    top: 0;
    left: 0;
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background: url('${baseImgix}/cards/basic/${props => props.$en.toLowerCase().replaceAll(' ', '-')}.webp?format=auto&rect=center,230,420,80&q=70');
    background-size: cover;
    :before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  p {
    font-weight: 700;
    text-shadow: 0px 0px 5px #000;
  }

  ${CostContainer} {
    opacity: 1;
    width: 22px;
    height: 22px;
    margin-right: 8px;
  }
`;
