import Button from '@atoms/Button';
import CardRow from '@atoms/CardRow';
import useModalToggler from '@hooks/useModalToggler';
import useRemoveItem from '@hooks/useRemoveItem';
import DeckRow from '@molecules/DeckRow';
import DeckStatistic from '@molecules/DeckStatistic';
import { BsCheck } from 'react-icons/bs';
import { useRecoilValue } from 'recoil';
import { deckStatusAtom } from 'src/@store/builder';
import * as S from './style';

const BuilderStatus = () => {
  const status = useRecoilValue(deckStatusAtom);
  const [onClick] = useRemoveItem();
  const [toggler] = useModalToggler('postDeck');
  return (
    <S.BuilderStatusContainer>
      <div className="content">
        {/* <Button className="filter" icon={<BsFilter />} colorType="success" /> */}
        <DeckStatistic dataSource={status} />
        <DeckRow
          dataSource={status}
          renderItem={item => (
            <div key={item.id} data-id={item?.id} onClick={onClick}>
              <CardRow {...item} />
            </div>
          )}
        />
        <Button icon={<BsCheck />} colorType="primary" onClick={toggler}>
          <span>등록</span>
        </Button>
      </div>
    </S.BuilderStatusContainer>
  );
};

export default BuilderStatus;
