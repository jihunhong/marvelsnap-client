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

export const postDeckApi = async (payload: { title: string; items: string[]; description: string | null }) => {
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

export const getDeckApi = async (id: string) => {
  const { data } = await axios.get('http://localhost:3000/api/deck', {
    params: {
      id,
    },
  });
  return data;
};

export const getCommentApi = async ({ collectionId, recordId, page }: { collectionId: string; recordId: string; page: number }) => {
  const { data } = await axios.get('http://localhost:3000/api/comment/list', {
    params: {
      page,
      collectionId,
      recordId,
    },
  });
  return data;
};

export const postCommentApi = async (payload: { collectionId: string; recordId: string; content: string }) => {
  const { data } = await axios.post('http://localhost:3000/api/comment', payload, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem('pocketbase_auth') || '{}')?.token,
    },
  });
  return data;
};

export const delCommentApi = async (id: string) => {
  const { data } = await axios.delete('http://localhost:3000/api/comment', {
    data: {
      id,
    },
    headers: {
      Authorization: JSON.parse(localStorage.getItem('pocketbase_auth') || '{}')?.token,
    },
  });
  return data;
};

export const getScoreApi = async ({ collectionId, recordId }: { collectionId: string; recordId: string }) => {
  const { data } = await axios.get('http://localhost:3000/api/score/list', {
    params: {
      collectionId,
      recordId,
    },
  });
  return data;
};

export const postScoreApi = async ({ collectionId, recordId, score }: { collectionId: string; recordId: string; score: number }) => {
  const { data } = await axios.post(
    'http://localhost:3000/api/score',
    {
      collectionId,
      recordId,
      score,
    },
    {
      headers: {
        Authorization: JSON.parse(localStorage.getItem('pocketbase_auth') || '{}')?.token,
      },
    },
  );
  return data;
};

export const searchingApi = async (q: string) => {
  const { data } = await axios.get('http://localhost:3000/api/search', {
    params: {
      q,
    },
  });
  return data;
};
