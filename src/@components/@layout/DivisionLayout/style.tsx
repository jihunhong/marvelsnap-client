import { ButtonGroupContainer } from '@atoms/ButtonGroup/style';
import device from '@styles/devices';
import styled from 'styled-components';
import { CardListContainer } from '../../@molecules/CardList/style';

export const DivisionLayoutContainer = styled.section`
  display: flex;
  flex-direction: column-reverse;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-areas: 'left left left left left left left left offset right right right';
  }

  ${ButtonGroupContainer} {
    margin-bottom: 1rem;
    margin-left: 8px;
  }

  ${CardListContainer} {
    grid-area: left;
  }

  section:has(${CardListContainer}) {
    grid-area: left;
  }
  section.left {
    grid-area: left;
  }

  section.right {
    grid-area: right;
  }

  --min-height: calc(100vh - var(--header-height));
  > section:nth-child(2) {
    position: relative;
    grid-area: right;
    @media ${device.tablet} {
      width: 100%;
      height: auto;
      min-height: unset;
      position: relative;
      bottom: 1rem;
      height: auto;
    }

    .content {
      position: relative;
      top: unset;
      min-height: 0px;
      height: auto;
      margin-bottom: 2rem;
      @media ${device.tablet} {
        position: sticky;
        top: var(--header-height);
        min-height: var(--min-height);
      }
    }
  }
`;
