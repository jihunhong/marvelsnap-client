import styled from 'styled-components';

export const BodyContainer = styled.main`
  min-height: 100vh;
  background: #161819;
  > section {
    :not(.full-width) {
      max-width: 1192px;
      margin-left: auto;
      margin-right: auto;
      padding-top: 56px;
    }
    width: 100%;
  }
`;
