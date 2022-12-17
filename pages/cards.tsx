import { NextPage } from 'next';
import CardList from '../src/components/@molecules/CardList';
import dynamic from 'next/dynamic';

const CardFilter = dynamic(() => import('../src/components/@molecules/CardFilter'), {
  ssr: false,
});

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
