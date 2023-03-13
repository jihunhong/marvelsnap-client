import ModalBase from '@atoms/Modal';
import CardDetailTemplate from '@components/@template/card/[cardDefId]';
import backgroundUrls from '@constant/backgrounds';
import DetailLayout from '@layout/DetailLayout';
import PageIntro from '@molecules/PageIntro';
import useCardQuery from '@query/useCardQuery';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const CardDetailModal = ({ visible }: { visible: boolean }) => {
  const router = useRouter();
  const [data] = useCardQuery();
  useEffect(() => {
    // 모달에서 뒤로가기하면 shallow로 원래 리스트 페이지 이동
    router.beforePopState(() => {
      router.replace('/cards', undefined, { shallow: true, scroll: false });
      return false;
    });
  }, []);
  return (
    <ModalBase visible={visible}>
      <PageIntro title={data?.en} description={''} bgSource={backgroundUrls.cards} objectPosition="center center" />
      <DetailLayout>
        <CardDetailTemplate />
      </DetailLayout>
    </ModalBase>
  );
};

export default CardDetailModal;
