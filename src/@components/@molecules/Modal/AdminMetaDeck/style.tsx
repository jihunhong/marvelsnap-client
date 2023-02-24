import { FlexColumn } from '@atoms/Flex/style';
import { CardGridContainer } from '@molecules/CardGrid/style';
import styled from 'styled-components';

export const AdminMetaDeckModalContainer = styled(FlexColumn)`
  .modal-header {
    width: 100%;
    margin-bottom: 1rem;
    svg {
      margin-right: 6px;
    }
  }
  ${CardGridContainer} {
    margin-bottom: 3rem;
    border: 2px dashed #dadada;
    padding: 1rem 0.7rem;
    border-radius: 6px;
  }
  form {
    width: 100%;
    display: grid;
    width: 100%;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(1.3rem, 1fr));
    grid-row-gap: 1rem;
  }
`;
