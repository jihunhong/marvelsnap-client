import ModalBase from '@atoms/Modal';
import DeckDetailTemplate from '@components/@template/deck/[deckId]';
import { baseImgix } from '@constant/imigx';
import DetailLayout from '@layout/DetailLayout';
import PageIntro from '@molecules/PageIntro';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const DeckDetailModal = ({ visible }: { visible: boolean }) => {
  const router = useRouter();
  useEffect(() => {
    router.beforePopState(() => {
      // 모달에서 뒤로가기하면 shallow로 원래 리스트 페이지 이동
      router.replace('/decks', undefined, { shallow: true, scroll: false });
      return false;
    });
  }, []);
  return (
    <ModalBase visible={visible}>
      <PageIntro title={'Deck'} description={''} bgSource={`${baseImgix}/static/background-card-detail.webp`} objectPosition="center bottom" />
      <DetailLayout>
        <DeckDetailTemplate />
      </DetailLayout>
    </ModalBase>
  );
};

export default DeckDetailModal;
