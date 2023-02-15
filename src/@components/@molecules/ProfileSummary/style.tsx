import { Opacity } from '@styles/transition';
import styled from 'styled-components';

export const ProfileSummaryContainer = styled.section`
  width: 100%;
  align-items: flex-start;
  box-shadow: 4px 7px 0px hsla(0, 0%, 0%, 0.14), 0px 1px 18px 0px hsla(0, 0%, 0%, 0.12), 0px 3px 5px -1px hsla(0, 0%, 0%, 0.2);
  border-radius: 6px;
  overflow: hidden;
  .background-header {
    width: 100%;
    height: 120px;
    border: none;
    position: relative;
    background: linear-gradient(90deg, var(--white), var(--primary-light-color));
  }

  --image-size: 72px;
  --half-size: calc(var(--image-size) / 2);
  --left-margin: 1.5rem;
  .profile-image {
    position: absolute;
    bottom: calc(calc(var(--image-size) / 2) * -1);
    left: var(--left-margin);

    overflow: hidden;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    border: 5px solid var(--black-0);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .profile-content {
    display: flex;
    flex-direction: column;
    height: 170px;
    padding: calc(var(--half-size) + 0.5rem) var(--left-margin) 1.8rem;
    background-color: var(--black-0);
  }

  .nickname {
    color: var(--white);
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .user-content {
    display: flex;
    align-items: center;

    span {
      color: var(--gray-1);
      font-weight: 500;
      font-size: 0.8rem;
      ${Opacity}
    }

    span:not(:last-child) {
      :after {
        content: '•';
        margin: auto 8px;
        font-weight: 600;
      }
    }
  }

  .actions {
    margin-top: auto;
    button {
      width: auto;
      height: 28px;
    }
  }
`;
