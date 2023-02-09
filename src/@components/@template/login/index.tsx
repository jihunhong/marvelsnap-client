import GoogleBtn from '@atoms/GoogleBtn';
import { baseImgix } from '@constant/imigx';
import { Provider } from '@customTypes/Provider';
import useProviders from '@hooks/pb/useProviders';
import Image from 'next/image';
import { FiInfo } from 'react-icons/fi';
import * as S from './style';

const LoginTemplate = () => {
  const [providers, handler] = useProviders();
  return (
    <S.LoginTemplateContainer>
      <S.AuthsContainer>
        <div>
          <div className="header">
            <h3>Welcome to Snapsco!</h3>
            <p>마블스냅에 관한 정보와 게임 플레이에 관한 다양한 컨텐츠를 즐겨보세요</p>
          </div>
          <div className="body">
            {providers?.map((item: Provider) => (
              <GoogleBtn key={item.name} onClick={() => handler(item)} />
            ))}
          </div>
        </div>
      </S.AuthsContainer>
      <S.BackgroundContainer>
        <Image src={`${baseImgix}/static/login-page-background.webp`} layout="fill" objectFit="cover" alt="today season pass image" />
        <div>
          <h1>Snapsco를 이용해보세요</h1>
          <h3>덱코드를 입력해 이용해보고 댓글을 남기고 카드들의 평점을 매길 수 있습니다</h3>
          <h4>정기적으로 업로드되는 글도 읽어보세요</h4>
          <div className="divider" />
          <div className="ps">
            <FiInfo size={14} color="#fff" />
            <span>
              사이트 이용에 문제가 있으시다면{' '}
              <a href="https://discord.gg/2hb3frmA" target="_blank" rel="noreferrer noopener">
                디스코드
              </a>
              로 문의 바랍니다
            </span>
          </div>
        </div>
      </S.BackgroundContainer>
    </S.LoginTemplateContainer>
  );
};

export default LoginTemplate;
