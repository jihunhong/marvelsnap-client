import { NextPage } from 'next';
import AppLayout from '../src/components/@layout/AppLayout';
import CardList from '../src/components/@molecules/CardList';
import CardFilter from '../src/components/@molecules/CardFilter';

const Cards: NextPage = () => {
  return (
    <>
      <section>
        <h2>카드 갤러리</h2>
        <CardList />
        <CardFilter />
      </section>
    </>
  );
};

export default Cards;
