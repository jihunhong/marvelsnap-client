import Button from '@atoms/Button';
import CardRow from '@atoms/CardRow';
import useModalToggler from '@hooks/modal/useModalToggler';
import useRemoveItem from '@hooks/useRemoveItem';
import useNavigate from '@hooks/useNavigate';
import DeckRow from '@molecules/DeckRow';
import { BsCheck } from 'react-icons/bs';
import { useRecoilValue } from 'recoil';
import { deckStatusAtom } from 'src/@store/builder';
import * as S from './style';
import useMobileCheck from '@hooks/useMobileCheck';

const BuilderStatus = () => {
  const status = useRecoilValue(deckStatusAtom);
  const [onClick] = useRemoveItem();
  const [isMobile] = useMobileCheck();
  const [toggler] = useModalToggler('postDeck');
  const [navigate] = useNavigate({ href: '/editor' });
  return (
    <S.BuilderStatusContainer initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
      <div className="content">
        {/* <DeckStatistic dataSource={status} /> */}
        <DeckRow
          dataSource={status}
          renderItem={item => (
            <div key={item.id} data-id={item?.id} onClick={onClick}>
              <CardRow {...item} />
            </div>
          )}
        />
        <Button icon={<BsCheck />} colorType="primary" onClick={isMobile ? toggler : navigate}>
          <span>등록</span>
        </Button>
      </div>
    </S.BuilderStatusContainer>
  );
};

export default BuilderStatus;
