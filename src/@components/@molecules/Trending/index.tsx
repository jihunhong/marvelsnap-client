import Divider from '@atoms/Divider';
import Post from '@atoms/Post';

const Trending = () => {
  return (
    <section>
      <Post />
      <Divider margin={24} />
      <Post />
      <Divider margin={24} />
      <Post />
      <Divider margin={24} />
      <Post />
      <Divider margin={24} />
      <Post />
    </section>
  );
};

export default Trending;
