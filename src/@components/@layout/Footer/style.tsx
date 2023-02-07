import device from '@styles/devices';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  min-width: 320px;
  > div {
    max-width: 1192px;
    padding: 2rem 0 2.5rem;
    margin: 0 2rem;
    border-top: 1px solid #fff;
    color: var(--white);

    @media ${device.mobileS} {
      margin: 0 2rem;
    }
    @media ${device.laptop} {
      margin: 0 62px;
      width: auto;
    }
    @media ${device.laptopL} {
      margin: auto;
      width: 100%;
    }

    p {
      margin-bottom: 4px;
    }
    p,
    span {
      font-size: 0.8rem;
    }

    .describe {
      margin-bottom: 1rem;
    }
    .about {
      display: flex;
      align-items: center;
      .contact {
        margin: 0 4px;
      }
    }
    .links {
      display: grid;
      column-gap: 4px;
      grid-template-rows: 1fr;
      grid-template-columns: repeat(auto-fill, 32px);
    }
  }
`;
