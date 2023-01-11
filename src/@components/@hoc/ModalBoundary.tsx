import dynamic from 'next/dynamic';

const DeckPostModal = dynamic(() => import('@molecules/DeckPostModal'), {
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
