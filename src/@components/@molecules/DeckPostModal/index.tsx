import Button from '@atoms/Button';
import Card from '@atoms/Card';
import Input from '@atoms/Input';
import ModalBase from '@atoms/Modal';
import useModalToggler from '@hooks/useModalToggler';
import useQuill from '@hooks/useQuill';
import usePostDeck from '@query/usePostDeck';
import dynamic from 'next/dynamic';
import { useDebugValue, useRef } from 'react';
import { TbClipboardList } from 'react-icons/tb';
import { useRecoilValue } from 'recoil';
import { deckStatusAtom } from 'src/@store/builder';
import * as S from './style';

const Quill = dynamic(() => import('@atoms/Quill'), {
  ssr: false,
});

const DeckPostModal = () => {
  const status = useRecoilValue(deckStatusAtom);
  const [canceller] = useModalToggler('postDeck');
  const titleRef = useRef();
  const [description, handler] = useQuill(null);
  const [postDeckEvent] = usePostDeck(titleRef?.current?.value, description);
  useDebugValue(description);
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
        <div className="grid">
          {status?.map(item => (
            <Card key={item.id} {...item} name="" />
          ))}
        </div>
        <Quill modules={{}} formats={[]} value={description} onChange={handler} placeholder="덱 설명을 입력해주세요" />
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
