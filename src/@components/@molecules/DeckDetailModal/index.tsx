import PropsModalBase from '@atoms/Modal/props';
import DeckDetailTemplate from '@components/@template/deck/[deckId]';
import { useRouter } from 'next/router';

const DeckDetailModal = ({ visible }: { visible: boolean }) => {
  const router = useRouter();
  const onClose = () => {
    // 모달 닫으면 원래 리스트 페이지로
    router.replace('/decks', undefined, { shallow: true, scroll: false });
  };
  return (
    <PropsModalBase visible={visible} onClose={onClose}>
      <DeckDetailTemplate />
    </PropsModalBase>
  );
};

export default DeckDetailModal;
