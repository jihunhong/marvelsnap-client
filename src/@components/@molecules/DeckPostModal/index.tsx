import Button from '@atoms/Button';
import CardRow from '@atoms/CardRow';
import Input from '@atoms/Input';
import ModalBase from '@atoms/Modal';
import useModalToggler from '@hooks/useModalToggler';
import usePostDeck from '@hooks/usePostDeckList';
import { useRef } from 'react';
import { TbClipboardList } from 'react-icons/tb';
import { useRecoilValue } from 'recoil';
import { deckStatusAtom } from 'src/@store/builder';
import * as S from './style';

const DeckPostModal = () => {
  const status = useRecoilValue(deckStatusAtom);
  const [canceller] = useModalToggler('postDeck');
  const titleRef = useRef();
  const [postDeckEvent] = usePostDeck(titleRef);
  return (
    <ModalBase modalKey={'postDeck'}>
      <S.Header>
        <div className="title">
          <TbClipboardList size={24} color={'#fff'} />
          <h2>Add decklist</h2>
        </div>
      </S.Header>
      <S.Body>
        <Input ref={titleRef} placeholder="덱 이름을 입력해주세요" />
        <div className="deck-data">
          {status?.map(item => (
            <div key={item?.id}>
              <CardRow {...item} />
            </div>
          ))}
        </div>
      </S.Body>
      <S.Footer>
        <div>
          <Button colorType="warn" onClick={canceller}>
            <span>취소</span>
          </Button>
          <Button colorType="success" onClick={postDeckEvent}>
            <span>공유</span>
          </Button>
        </div>
      </S.Footer>
    </ModalBase>
  );
};

export default DeckPostModal;
