import { baseImgix } from '@constant/imigx';
import SearchInput from '@molecules/SearchInput';
import * as S from './style';

const IntroVideoSection = () => {
  return (
    <S.IntroSectionContainer>
      <div className="container">
        <div className="text search">
          <h1>Snapsco.net</h1>
          <h4>마블스냅과 관련된 다양한 컨텐츠를 찾아보세요</h4>
          <SearchInput />
        </div>
        <div className="video-background">
          <div>
            <video autoPlay loop muted playsInline poster={`${baseImgix}/static/intro-video-thumbnail.png?format=auto`}>
              <source src={`${baseImgix}/static/intro-video.webm`} type="video/webm; codecs=vp9,vorbis" />
              <source src={`${baseImgix}/static/intro-video.mp4`} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </S.IntroSectionContainer>
  );
};

export default IntroVideoSection;
