import { NextPage } from 'next';
import Deck from '../src/components/@atoms/Deck';
import DeckList from '../src/components/@molecules/DeckList';

const Decks: NextPage = () => {
  return (
    <>
      <section className="full-width" style={{ height: 500 }}></section>
      <section>
        <DeckList />
      </section>
    </>
  );
};

export default Decks;
