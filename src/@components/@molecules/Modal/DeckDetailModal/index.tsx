import PropsModalBase from '@atoms/Modal/props';
import DeckDetailTemplate from '@components/@template/deck/[deckId]';
import useDeckInfoQuery from '@query/useDeckInfo';
import { useRouter } from 'next/router';
import { CgNotes } from 'react-icons/cg';

const DeckDetailModal = ({ visible }: { visible: boolean }) => {
  const router = useRouter();
  const [data] = useDeckInfoQuery();
  const onClose = () => {
    // 모달 닫으면 원래 리스트 페이지로
    router.replace('/decks', undefined, { shallow: true, scroll: false });
  };
  return (
    <PropsModalBase icon={<CgNotes />} title={data?.title} visible={visible} onClose={onClose}>
      <DeckDetailTemplate />
    </PropsModalBase>
  );
};

export default DeckDetailModal;
