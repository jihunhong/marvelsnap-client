import Button from '@atoms/Button';
import CardRow from '@atoms/CardRow';
import useBlockNotify from '@hooks/notify/useBlockNotify';
import useMetaPrompt from '@hooks/user/useMetaPrompt';
import useRemoveItem from '@hooks/useRemoveItem';
import useToggle from '@hooks/useToggle';
import { BuilderStatusContainer } from '@molecules/BuilderStatus/style';
import DeckRow from '@molecules/DeckRow';
import useUser from '@query/useUser';
import dynamic from 'next/dynamic';
import { BsCheck } from 'react-icons/bs';
import { SyntheticEvent } from 'react-toastify/dist/utils';
import { useRecoilValue } from 'recoil';
import { deckStatusAtom } from 'src/@store/builder';

const AdminMetaDeckModal = dynamic(() => import('@molecules/Modal/AdminMetaDeck'), {
  ssr: false,
});

const AdminBuilderStatus = () => {
  const status = useRecoilValue(deckStatusAtom);
  const [onClick] = useRemoveItem();
  const notify = useBlockNotify();
  const [user] = useUser();
  const [visible, toggler] = useToggle();
  const handleRoute = (e: SyntheticEvent) => {
    if (!!user === false) {
      return notify.loginAccessNotify();
    }
    if (status?.length < 12) {
      notify.blockDeckAmount();
    } else {
      toggler();
    }
  };
  return (
    <>
      <AdminMetaDeckModal visible={visible} onClose={toggler} />
      <BuilderStatusContainer>
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
      </BuilderStatusContainer>
    </>
  );
};

export default AdminBuilderStatus;
