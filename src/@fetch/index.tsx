import axios from 'axios';

export const getCardListApi = async () => {
  const { data } = await axios.get('http://localhost:3000/api/cards/list');
  return data;
};

export const getDeckListApi = async () => {
  const { data } = await axios.get('http://localhost:3000/api/decks/list');
  return data;
};

export const postDeckApi = async payload => {
  const { data } = await axios.post('http://localhost:3000/api/deck', payload);
  return data;
};
