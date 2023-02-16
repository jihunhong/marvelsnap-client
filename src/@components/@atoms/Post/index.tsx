import Avatar from '@atoms/Avatar';
import Divider from '@atoms/Divider';
import Image from 'next/image';
import { PostPreviewContainer } from './style';

type Props = {
  title: string;
  summary: string;
  tags: Array<string>;
  writer: string;
  thumbnail: string;
};

const Post = ({ title = 'ChatGPT Is Having a Thomas Edison Moment', summary = 'Why breakthrough technologies need to be accessible', writer = 'jihunhong', thumbnail }: Partial<Props>) => {
  return (
    <>
      <PostPreviewContainer>
        <div className="meta">
          <div className="writer">
            {/* <Avatar src="https://avatars.githubusercontent.com/u/21700764?v=4" /> */}
            <h4>{writer}</h4>
          </div>
          <h2>{title}</h2>
          <h3>{summary}</h3>
        </div>
        <div className="thumb-container">
          <Image width={200} height={134} src={thumbnail!} alt={title || 'post thumbnail'} />
        </div>
      </PostPreviewContainer>
    </>
  );
};

export default Post;
