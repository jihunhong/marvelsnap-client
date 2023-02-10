import Button from '@atoms/Button';
import CardRow from '@atoms/CardRow';
import useBlockNotify from '@hooks/notify/useBlockNotify';
import useNavigate from '@hooks/useNavigate';
import useRemoveItem from '@hooks/useRemoveItem';
import DeckRow from '@molecules/DeckRow';
import useUser from '@query/useUser';
import { BsCheck } from 'react-icons/bs';
import { SyntheticEvent } from 'react-toastify/dist/utils';
import { useRecoilValue } from 'recoil';
import { deckStatusAtom } from 'src/@store/builder';
import * as S from './style';

const BuilderStatus = () => {
  const status = useRecoilValue(deckStatusAtom);
  const [onClick] = useRemoveItem();
  const [navigate] = useNavigate({ href: '/editor' });
  const notify = useBlockNotify();
  const [user] = useUser();
  const handleRoute = (e: SyntheticEvent) => {
    if (!!user === false) {
      return notify.loginAccessNotify();
    }
    if (status?.length < 12) {
      notify.blockDeckAmount();
    } else {
      navigate(e);
    }
  };
  return (
    <S.BuilderStatusContainer>
      <div className="content">
        <DeckRow
          dataSource={status}
          renderItem={item => (
            <div key={item.id} data-id={item?.id} onClick={onClick}>
              <CardRow {...item} />
            </div>
          )}
        />
        <Button icon={<BsCheck />} colorType="primary" onClick={handleRoute}>
          <span>등록</span>
        </Button>
      </div>
    </S.BuilderStatusContainer>
  );
};

export default BuilderStatus;
