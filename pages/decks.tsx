import { NextPage } from 'next';
import DeckList from '../src/components/@molecules/DeckList';
import PageIntro from '../src/components/@molecules/PageIntro';

const Decks: NextPage = () => {
  return (
    <>
      <PageIntro
        title="Decks"
        description="메타에서 효과적인 다양한 덱들을 찾아보세요"
        bgSource="https://earlygame.com/uploads/images/_body/FutureMarvelSnap-Banner.jpg"
      />
      <section>
        <DeckList />
      </section>
    </>
  );
};

export default Decks;
