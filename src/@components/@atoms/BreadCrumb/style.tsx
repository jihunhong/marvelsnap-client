import styled from 'styled-components';
import { FlexRow } from 'src/@components/@atoms/Flex/style';

export const BreadCrumbsContainer = styled(FlexRow)`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.8rem;
  svg {
    margin: 0 8px;
    color: var(--gray-1);
  }
  a {
    color: var(--primary-color);
  }
`;
