import Button from '@atoms/Button';
import CardRow from '@atoms/CardRow';
import Input from '@atoms/Input';
import useModalToggler from '@hooks/useModalToggler';
import usePostDeck from '@hooks/usePostDeckList';
import { useEffect, useRef } from 'react';
import { TbClipboardList } from 'react-icons/tb';
import { useRecoilValue } from 'recoil';
import { deckStatusAtom } from 'src/@store/builder';
import { modalStatus } from 'src/@store/modal';
import * as S from './style';

const DeckPostModal = () => {
  const visible = useRecoilValue(modalStatus('postDeck'));
  const status = useRecoilValue(deckStatusAtom);
  const [canceller] = useModalToggler('postDeck');
  const [postDeckEvent] = usePostDeck();
  const dialogRef = useRef();
  useEffect(() => {
    if (dialogRef.current) {
      if (!visible) dialogRef.current?.close();
    }
  }, [dialogRef, visible]);
  return (
    <S.DeckPostModalContainer open={visible} ref={dialogRef}>
      <S.Header>
        <div className="title">
          <TbClipboardList size={24} color={'#fff'} />
          <h2>Add decklist</h2>
        </div>
      </S.Header>
      <S.Body>
        <Input placeholder="덱 이름을 입력해주세요" />
        <div className="deck-data">
          {status?.map(item => (
            <div key={item?.id}>
              <CardRow {...item} />
            </div>
          ))}
        </div>
      </S.Body>
      <S.Footer>
        <h4>추가하신 카드들이 맞는지 확인해주세요 😊</h4>
        <div>
          <Button colorType="warn" onClick={canceller}>
            <span>취소</span>
          </Button>
          <Button colorType="success" onClick={postDeckEvent}>
            <span>공유</span>
          </Button>
        </div>
      </S.Footer>
    </S.DeckPostModalContainer>
  );
};

export default DeckPostModal;
