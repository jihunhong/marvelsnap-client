import dynamic from 'next/dynamic';

const DeckPostModal = dynamic(() => import('@molecules/Modal/DeckPostModal'), {
  ssr: false,
  loading: () => <></>,
});

const ModalBoundary = () => {
  return (
    <>
      <DeckPostModal />
    </>
  );
};

export default ModalBoundary;
