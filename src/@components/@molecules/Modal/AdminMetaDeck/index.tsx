import Button from '@atoms/Button';
import { FlexRow } from '@atoms/Flex/style';
import Input from '@atoms/Input';
import { smallStyle } from '@atoms/Modal/style';
import useMetaDeckForm from '@hooks/user/useMetaDeckForm';
import CardGrid from '@molecules/CardGrid';
import { TbClipboardList } from 'react-icons/tb';
import Modal, { setAppElement } from 'react-modal';
import { useRecoilValue } from 'recoil';
import { deckStatusAtom } from 'src/@store/builder';
import * as S from './style';

setAppElement('#__next');

const AdminMetaDeckModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  const [values, onChange, onSubmit] = useMetaDeckForm();
  const addedCards = useRecoilValue(deckStatusAtom);
  return (
    <Modal style={smallStyle} isOpen={visible} preventScroll={true} onRequestClose={onClose}>
      <S.AdminMetaDeckModalContainer justify="flex-start">
        <FlexRow justify="flex-start" className="modal-header">
          <TbClipboardList size={21} color="#fff" />
          <h3>메타 덱 등록</h3>
        </FlexRow>
        <div className="preview">
          <CardGrid expand={{ items: addedCards }} />
        </div>
        <form>
          <Input name="title" placeholder="타이틀" onChange={onChange} value={values.title} />
          <Input name="description" placeholder="설명" onChange={onChange} value={values.description} />
          <Input name="origin" placeholder="출처" onChange={onChange} value={values.origin} />
          <Input name="writer" placeholder="닉네임" onChange={onChange} value={values.writer} />
          <Button type="button" colorType="success" onClick={onSubmit}>
            <span>확인</span>
          </Button>
        </form>
      </S.AdminMetaDeckModalContainer>
    </Modal>
  );
};

export default AdminMetaDeckModal;
