import axios from 'axios';

export const baseUrl = process.env.NODE_ENV === 'production' ? 'https://snapsco.net' : 'http://localhost:3000';
export const END_POINT = process.env.END_POINT;

axios.defaults.baseURL = baseUrl;

export const getCardListApi = async () => {
  const { data } = await axios.get('/api/card/list');
  return data;
};

export const getDeckListApi = async (page: number = 1) => {
  const { data } = await axios.get('/api/deck/list', {
    params: {
      page,
    },
  });
  return data;
};

export const getMetaDeckListApi = async (page: number = 1) => {
  const { data } = await axios.get('/api/meta/deck/list', {
    params: {
      page,
    },
  });
  return data;
};

export const getArticleListApi = async (page: number = 1) => {
  const { data } = await axios.get('/api/article/list', {
    params: {
      page,
    },
  });
  return data;
};

export const getMetaDeckApi = async (id: string) => {
  const { data } = await axios.get('/api/meta/deck', {
    params: {
      id,
    },
  });

  return data;
};

export const postArticleApi = async (payload: { title: string; summary: string; thumbnail: string; content: string; writer: string }) => {
  const { data } = await axios.post('/api/admin/article', payload, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem('pocketbase_auth') || '{}')?.token,
    },
  });
  return data;
};

export const postDeckApi = async (payload: { title: string; items: string[]; description: string | null }) => {
  const { data } = await axios.post('/api/deck', payload, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem('pocketbase_auth') || '{}')?.token,
    },
  });
  return data;
};

export const postMetaDeckApi = async (payload: { title: string; description: string; origin: string; writer: string; items: string[] }) => {
  const { data } = await axios.post('/api/meta/deck', payload, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem('pocketbase_auth') || '{}')?.token,
    },
  });
  return data;
};

export const getCardApi = async (cardDefId: string) => {
  const { data } = await axios.get('/api/card', {
    params: {
      cardDefId,
    },
  });
  return data;
};

export const getDeckApi = async (id: string) => {
  const { data } = await axios.get('/api/deck', {
    params: {
      id,
    },
  });
  return data;
};

export const getProfileApi = async (userName: string) => {
  const { data } = await axios.get('/api/profile', {
    params: {
      userName,
    },
  });
  return data;
};

export const getArticle = async (id: string) => {
  const { data } = await axios.get('/api/article', {
    params: {
      id,
    },
  });
  return data;
};

export const getCommentApi = async ({ collectionId, recordId, page }: { collectionId: string; recordId: string; page: number }) => {
  const { data } = await axios.get('/api/comment/list', {
    params: {
      page,
      collectionId,
      recordId,
    },
  });
  return data;
};

export const postCommentApi = async (payload: { collectionId: string; recordId: string; content: string }) => {
  const { data } = await axios.post('/api/comment', payload, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem('pocketbase_auth') || '{}')?.token,
    },
  });
  return data;
};

export const delCommentApi = async (id: string) => {
  const { data } = await axios.delete('/api/comment', {
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
  const { data } = await axios.get('/api/score/list', {
    params: {
      collectionId,
      recordId,
    },
  });
  return data;
};

export const postScoreApi = async ({ collectionId, recordId, score }: { collectionId: string; recordId: string; score: number }) => {
  const { data } = await axios.post(
    '/api/score',
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
  const { data } = await axios.get('/api/search', {
    params: {
      q,
    },
  });
  return data;
};

export const postLikeApi = async ({ collectionId, recordId }: { collectionId: string; recordId: string }) => {
  const { data } = await axios.post(
    '/api/like',
    {
      collectionId,
      recordId,
    },
    {
      headers: {
        Authorization: JSON.parse(localStorage.getItem('pocketbase_auth') || '{}')?.token,
      },
    },
  );

  return data;
};

export const getLikeApi = async ({ collectionId, recordId }: { collectionId: string; recordId: string }) => {
  const { data } = await axios.get('/api/like/list', {
    params: {
      collectionId,
      recordId,
    },
  });

  return data;
};

export const getCollectionApi = async (profileId: string) => {
  const { data } = await axios.get('/api/user/collection', {
    params: {
      profileId,
    },
  });
  return data;
};

export const getUsersCollectionApi = async (id: string) => {
  const { data } = await axios.get('/api/user/collection/list', {
    params: {
      id,
    },
  });
  return data;
};

export const putUserCollectionApi = async (payload: { id: string; cardDefId: string }) => {
  const { data } = await axios.put('/api/user/collection/insert', payload);
  return data;
};

export const postUserCollectionApi = async (payload: { profileId: string; cards: Array<string> }) => {
  const { data } = await axios.post('/api/user/collection', payload);

  return data;
};

export const postCollectionApi = async (payload: { profileId: string; userId: string }) => {
  const { data } = await axios.patch('/api/user/collection/sync', payload, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem('pocketbase_auth') || '{}')?.token,
    },
  });

  return data;
};
