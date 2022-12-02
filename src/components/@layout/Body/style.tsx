import styled from 'styled-components';

export const BodyContainer = styled.main`
  min-height: 100vh;
  background: #161819;
  > section {
    :not(.full-section) {
      max-width: 1192px;
    }
    width: 100%;
  }
`;
