import useCardListQuery from '@query/useCardListQuery';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';

const useCardNavigate = () => {
  const [cardList] = useCardListQuery();
  const router = useRouter();
  const random = () => {
    const index = Math.floor(Math.random() * (cardList.length + 1));
    router.push(`/card/${cardList[index].cardDefId}`);
  };

  const daily = () => {
    const year = dayjs().get('year');
    const start = dayjs(`${year}-01-01`);
    const count = start.diff(dayjs(), 'day');
    const index = count % cardList.length;
    router.push(`/card/${cardList[index].cardDefId}`);
  };

  return { random, daily };
};

export default useCardNavigate;
