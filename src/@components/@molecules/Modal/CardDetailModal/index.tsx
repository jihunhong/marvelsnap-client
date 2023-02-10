import ModalBase from '@atoms/Modal';
import CardDetailTemplate from '@components/@template/card/[cardDefId]';
import { baseImgix } from '@constant/imigx';
import DetailLayout from '@layout/DetailLayout';
import PageIntro from '@molecules/PageIntro';
import useCardQuery from '@query/useCardQuery';
import { useRouter } from 'next/router';

const CardDetailModal = ({ visible }: { visible: boolean }) => {
  const router = useRouter();
  const [data] = useCardQuery();
  const onClose = () => {
    // 모달 닫으면 원래 리스트 페이지로
    router.replace('/cards', undefined, { shallow: true, scroll: false });
  };
  return (
    <ModalBase visible={visible} onClose={onClose}>
      <PageIntro title={data?.en} description={''} bgSource={`${baseImgix}/static/background-card-detail.webp`} objectPosition="center center" />
      <DetailLayout>
        <CardDetailTemplate />
      </DetailLayout>
    </ModalBase>
  );
};

export default CardDetailModal;
