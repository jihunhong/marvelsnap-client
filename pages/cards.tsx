import { NextPage } from 'next';
import CardFilter from '../src/components/@molecules/CardFilter';
import CardList from '../src/components/@molecules/CardList';

const Cards: NextPage = () => {
  return (
    <>
      <section className="full-width" style={{ height: 500 }}></section>
      <section>
        <CardList />
        <CardFilter />
      </section>
    </>
  );
};

export default Cards;
