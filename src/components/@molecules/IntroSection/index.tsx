import { FaGithub } from 'react-icons/fa';
import * as S from './style';
import videoId from '../../../../@constant/videoId';
import Button from '../../@atoms/Button';
import Input from '../../@atoms/Input';

const IntroVideoSection = () => {
  return (
    <S.IntroSectionContainer>
      <div className="container">
        <div className="content">
          <h1>Finger SNAP</h1>
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
          <div className="input-action">
            <Input placeholder="덱, 카드이름으로 검색해보세요." />
          </div>
        </div>
        <div className="video-background">
          <div>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&disablekb=1&rel=0&controls=0&version=3&playlist=${videoId}`}
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
