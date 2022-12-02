import { FaGithub } from 'react-icons/fa';
import * as S from './style';

const IntroVideoSection = () => {
  return (
    <S.IntroSectionContainer>
      <div className="container">
        <div className="text-box">
          <h1>Double SNAP</h1>
          <h3>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, qui saepe doloribus
            ducimus
          </h3>
          <a className="owner-link" href="https://github.com/jihunhong">
            <>
              <span>2022 · jihunhong</span>
              <FaGithub fill="#fff" />
            </>
          </a>
        </div>
        <div className="video-container">
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/JL9F3-YxqFI?autoplay=1&mute=1&loop=1&disablekb=1&rel=0&controls=0&version=3"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </S.IntroSectionContainer>
  );
};

export default IntroVideoSection;
