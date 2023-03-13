import ModalBase from '@atoms/Modal';
import MetaDeckDetailTemplate from '@components/@template/meta/deck/[deckId]';
import backgroundUrls from '@constant/backgrounds';
import DetailLayout from '@layout/DetailLayout';
import PageIntro from '@molecules/PageIntro';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const MetaDeckDetailModal = ({ visible }: { visible: boolean }) => {
  const router = useRouter();
  useEffect(() => {
    router.beforePopState(() => {
      // 모달에서 뒤로가기하면 shallow로 원래 리스트 페이지 이동
      router.replace('/meta', undefined, { shallow: true, scroll: false });
      return false;
    });
  }, []);
  return (
    <ModalBase visible={visible}>
      <PageIntro title={'Meta Deck'} description={''} bgSource={backgroundUrls.cards} objectPosition="center bottom" />
      <DetailLayout>
        <MetaDeckDetailTemplate />
      </DetailLayout>
    </ModalBase>
  );
};

export default MetaDeckDetailModal;
