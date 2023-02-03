import PropsModalBase from '@atoms/Modal/props';
import CardDetailTemplate from '@components/@template/card/[cardDefId]';
import useCardQuery from '@query/useCardQuery';
import { useRouter } from 'next/router';
import { FaRegIdCard } from 'react-icons/fa';

const CardDetailModal = ({ visible }: { visible: boolean }) => {
  const router = useRouter();
  const [data] = useCardQuery();
  const onClose = () => {
    // 모달 닫으면 원래 리스트 페이지로
    router.replace('/cards', undefined, { shallow: true, scroll: false });
  };
  return (
    <PropsModalBase icon={<FaRegIdCard color="white" />} title={data?.name} visible={visible} onClose={onClose}>
      <CardDetailTemplate />
    </PropsModalBase>
  );
};

export default CardDetailModal;
