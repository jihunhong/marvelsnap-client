import CardRow from '@atoms/CardRow';
import Input from '@atoms/Input';
import { useRecoilValue } from 'recoil';
import { deckStatusAtom } from 'src/@store/builder';
import * as S from './style';

const BuilderStatus = () => {
  const status = useRecoilValue(deckStatusAtom);

  return (
    <S.BuilderStatusContainer>
      <div className="content">
        <Input placeholder="# 덱 이름을 입력해주세요" />
        <div className="deck-data">
          {status?.map(item => (
            <CardRow key={item.id} {...item} />
          ))}
        </div>
      </div>
    </S.BuilderStatusContainer>
  );
};

export default BuilderStatus;
