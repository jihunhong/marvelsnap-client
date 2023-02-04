import styled from 'styled-components';

type Flex = {
  justify?: 'center' | 'space-between' | 'space-around' | 'flex-start';
};

export const FlexRow = styled.div<Flex>`
  display: flex;
  align-items: center;
  justify-content: ${p => p.justify || 'flex-start'};
`;

export const FlexColumn = styled.div<Flex>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${p => p.justify || 'flex-start'};
`;
