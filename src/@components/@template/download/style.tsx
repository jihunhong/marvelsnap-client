import { DividerContainer } from '@atoms/Divider/style';
import { FlexRow } from '@atoms/Flex/style';
import { TagContainer } from '@atoms/Tag/style';
import device from '@styles/devices';
import styled from 'styled-components';

export const PreviewBox = styled.div`
  position: relative;
  border-top-right-radius: 6px
  border-bottom-right-radius: 6px;
  overflow: hidden;
  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(142deg, rgb(0 0 0 / 72%), rgb(0 0 0 / 90%));
  }
  div.info {
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 2rem;
    right: 2rem;
    transform: translateY(-50%);
    ${DividerContainer} {
      border-color: var(--white);
    }
    ul.notes {
      color: var(--white);
      font-size: 0.8rem;
    }
  }
`;

export const DescriptionBox = styled.div`
  ${FlexRow} {
    align-items: flex-start;
  }
  div.container {
    margin: auto;
    align-items: flex-start;
    h1 {
      color: var(--white);
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
    h4 {
      color: var(--gray-0);
      font-weight: 500;
    }
    li {
      color: var(--gray-0);
    }
  }
  ${TagContainer} {
    margin-left: 4px;
    background: linear-gradient(180deg, #050505 0%, #000000 100%);
  }
  div.download {
    display: grid;
    grid-template-columns: auto 1fr 0px;
  }
  .upload-btn {
    margin: 0;
  }
`;

export const DownloadTemplateContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  height: 600px;
  border: 1px solid rgb(255 255 255 / 5%);
  box-shadow: 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%), 0px 2px 4px -1px rgb(0 0 0 / 20%);
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    height: 800px;
  }

  ${PreviewBox}, ${DescriptionBox} {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem 1.8rem;
  }
  border-radius: 6px;
  padding-top: 0;

  div.ps {
    svg {
      vertical-align: middle;
      margin-right: 8px;
    }
    span,
    p {
      font-size: 0.8rem;
      font-weight: 500;
      a {
        text-decoration: underline;
      }
    }
    display: flex;
    align-items: center;
  }
`;
