import Button from '@atoms/Button';
import CardRow from '@atoms/CardRow';
import Input from '@atoms/Input';
import useRemoveItem from '@hooks/useRemoveItem';
import { BsCheck, BsFilter } from 'react-icons/bs';
import { useRecoilValue } from 'recoil';
import { deckStatusAtom } from 'src/@store/builder';
import * as S from './style';

const BuilderStatus = () => {
  const status = useRecoilValue(deckStatusAtom);
  const [onClick] = useRemoveItem();

  return (
    <S.BuilderStatusContainer>
      <div className="content">
        <Button className="filter" icon={<BsFilter />} colorType="success" />
        <Input placeholder="# 덱 이름을 입력해주세요" />
        <div className="deck-data">
          {status?.map(item => (
            <div key={item.id} data-id={item?.id} onClick={onClick}>
              <CardRow {...item} />
            </div>
          ))}
        </div>
        <Button icon={<BsCheck />} colorType="primary">
          <span>등록</span>
        </Button>
      </div>
    </S.BuilderStatusContainer>
  );
};

export default BuilderStatus;
