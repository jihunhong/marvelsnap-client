import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');
(async () => {
  const cards = await pb.collection('cards').getFullList(300, {
    expand: 'keywords',
  });
  console.log(cards);
})();
