import ModalBase from '@atoms/Modal';
import DeckDetailTemplate from '@components/@template/deck/[deckId]';
import { baseImgix } from '@constant/imigx';
import DetailLayout from '@layout/DetailLayout';
import PageIntro from '@molecules/PageIntro';
import { useRouter } from 'next/router';

const DeckDetailModal = ({ visible }: { visible: boolean }) => {
  const router = useRouter();
  const onClose = () => {
    // 모달 닫으면 원래 리스트 페이지로
    router.replace('/decks', undefined, { shallow: true, scroll: false });
  };
  return (
    <ModalBase visible={visible} onClose={onClose}>
      <PageIntro title={'Deck'} description={''} bgSource={`${baseImgix}/static/background-card-detail.webp`} objectPosition="center bottom" />
      <DetailLayout>
        <DeckDetailTemplate />
      </DetailLayout>
    </ModalBase>
  );
};

export default DeckDetailModal;
