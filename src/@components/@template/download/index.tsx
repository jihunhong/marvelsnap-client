import Button from '@atoms/Button';
import Divider from '@atoms/Divider';
import { FlexRow } from '@atoms/Flex/style';
import Tag from '@atoms/Tag';
import { baseImgix } from '@constant/imigx';
import useUploadCollection from '@hooks/action/useUploadCollection';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { BiUpload } from 'react-icons/bi';
import { BsWindows } from 'react-icons/bs';
import { FiInfo } from 'react-icons/fi';
import * as S from './style';

const DownloadTemplate = () => {
  const inputRef = useRef(null);
  const [onClick, onChange] = useUploadCollection(inputRef);
  return (
    <S.DownloadTemplateContainer>
      <S.DescriptionBox>
        <div className="container">
          <FlexRow>
            <h1>Snapsco Tracker </h1>
            <Tag>Beta</Tag>
          </FlexRow>
          <h4>현재 트래커 기능은 베타버전입니다.</h4>
          <h4>추후 여러 기능들을 추가할 예정이며 현재는 아래와같은 기능들을 이용 할 수 있습니다.</h4>
          <div>
            <ul>
              <li>현재 가지고있는 내 컬렉션 카드들을 모아 볼 수 있습니다</li>
            </ul>
          </div>
          <div className="download">
            <Link href="https://github.com/jihunhong/marvelsnap-electron/releases/latest">
              <a target="_blank" rel="noreferrer noopener">
                <Button icon={<BsWindows />} colorType="success">
                  <span>Download for Windows</span>
                </Button>
              </a>
            </Link>
            <Button className="upload-btn" icon={<BiUpload />} colorType="plain" onClick={onClick}>
              <span>파일 직접 업로드</span>
            </Button>
            <input type="file" accept=".json" ref={inputRef} onChange={onChange} />
          </div>
          <Divider margin={14} />
          <div className="ps">
            <FiInfo size={14} color="#fff" />
            <p>직접 업로드를 이용하신다면 아래의 경로에 위치한 파일을 업로드해주세요</p>
          </div>
          <Divider margin={8} borderless />
          <kbd>C:\Users\계정\AppData\LocalLow\Second Dinner\SNAP\Standalone\States\nvprod\CollectionState.json</kbd>
        </div>
      </S.DescriptionBox>
      <S.PreviewBox>
        <Image src={`${baseImgix}/static/collection-preview.webp`} layout="fill" objectFit="cover" alt="collection preview" objectPosition="left top" />
        <div className="info">
          <h2>개발 예정 로드맵</h2>
          <ul className="notes">
            <li>덱 통계</li>
            <li>전적 통계</li>
            <li>컬렉션 자동 연동</li>
          </ul>
          <Divider margin={14} />
          <div className="ps">
            <FiInfo size={14} color="#fff" />
            <span>
              트래커 이용에 문제가 있으시다면{' '}
              <a href="https://discord.gg/EM2bmXDAwQ" target="_blank" rel="noreferrer noopener">
                디스코드
              </a>
              로 문의 바랍니다
            </span>
          </div>
        </div>
      </S.PreviewBox>
    </S.DownloadTemplateContainer>
  );
};

export default DownloadTemplate;
