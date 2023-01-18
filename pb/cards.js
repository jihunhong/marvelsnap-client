import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

(async () => {
  const cards = await pb.collection('cards').getFullList(800);
  for (const c of cards) {
    try {
      const variants = await pb.collection('variants').getList(1, 30, {
        filter: `cId="${c.id}"`,
      });
      const ids = variants.items.map(v => v.id);
      await pb.collection('cards').update(c.id, {
        variants: ids || [],
      });
    } catch (err) {
      console.error(`not found ${name}`);
    }
  }
})();
