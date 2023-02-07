import device from '@styles/devices';
import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
  }
  position: relative;
  :before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: linear-gradient(142deg, rgb(0 0 0 / 72%), rgb(0 0 0 / 90%));
    z-index: 1;
  }
  > div {
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 2rem;
    right: 2rem;
    transform: translateY(-50%);
    h1 {
      color: var(--white);
      font-weight: 600;
      font-size: 38px;
      line-height: 1;
      margin-bottom: 16px;
    }
    h3 {
      font-size: 0.9rem;
      font-weight: 700;
      margin-bottom: 4px;
    }
    h4 {
      font-size: 0.85rem;
      font-weight: 600;
    }
    div.divider {
      margin: 16px 0;
      border-top: 1px solid #fff;
    }
    div.ps {
      svg {
        vertical-align: middle;
        margin-right: 8px;
      }
      span {
        font-size: 0.8rem;
        font-weight: 500;
        a {
          text-decoration: underline;
        }
      }
      display: flex;
      align-items: center;
    }
  }
`;
export const AuthsContainer = styled.div`
  background: linear-gradient(142deg, #25282a, rgb(0 0 0 / 36%));
  padding: 2rem;
  display: flex;
  > div {
    margin: auto 0;
    width: 100%;
  }
  .header {
    h3 {
      margin-bottom: 8px;
    }
    p {
      color: var(--gray-0);
      margin-bottom: 14px;
    }
    margin-bottom: 16px;
  }

  .body {
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
  }
`;
export const LoginTemplateContainer = styled.section`
  box-shadow: 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%), 0px 2px 4px -1px rgb(0 0 0 / 20%);
  border: 1px solid rgb(255 255 255 / 5%);
  display: grid;
  grid-template-columns: 1fr;
  height: 600px;
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    height: 800px;
  }

  border-radius: 6px;
  overflow: hidden;
  padding-top: 0;
`;
