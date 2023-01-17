import styled from 'styled-components';

type customProps = {
  $gap: number;
  $occupy: number | string;
};

export const SliderContainer = styled.div<customProps>`
  > ul.list {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }

    display: grid;
    padding: 0;
    margin: 0;

    grid-column-gap: ${props => props.$gap}px;
    grid-auto-flow: column;
    grid-auto-columns: ${props => (typeof props.$occupy === 'string' ? props.$occupy : props.$occupy * 100 + '%')};
    overflow-x: auto;
    overflow-y: hidden;
    overscroll-behavior-inline: contain;

    scroll-snap-type: inline mandatory;

    > * {
      scroll-snap-align: start;
    }
  }
`;
