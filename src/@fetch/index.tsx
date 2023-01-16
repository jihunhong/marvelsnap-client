import axios from 'axios';

export const getCardListApi = async () => {
  const { data } = await axios.get('http://localhost:3000/api/card/list');
  return data;
};

export const getDeckListApi = async (page: number = 1) => {
  const { data } = await axios.get('http://localhost:3000/api/deck/list', {
    params: {
      page,
    },
  });
  return data;
};

export const postDeckApi = async (payload: { title: string; items: string[] }) => {
  const { data } = await axios.post('http://localhost:3000/api/deck', payload);
  return data;
};

export const getCardApi = async (cardDefId: string) => {
  const { data } = await axios.get('http://localhost:3000/api/card', {
    params: {
      cardDefId,
    },
  });
  return data;
};
