import styled from 'styled-components';

type DividerContainerProps = {
  $margin: number;
  $borderless: boolean;
};
export const DividerContainer = styled.div<DividerContainerProps>`
  margin: ${props => props.$margin}px auto;
  border-top: ${props => (props.$borderless ? 'none' : '1px solid var(--white-border-color)')};
`;
