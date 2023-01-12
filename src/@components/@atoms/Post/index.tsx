import { PostPreviewContainer } from './style';
import Avatar from '@atoms/Avatar';

type Props = {
  title: string;
  content: string;
  tags: Array<string>;
  writer: string;
};

const Post = ({ title = 'ChatGPT Is Having a Thomas Edison Moment', content = 'Why breakthrough technologies need to be accessible', writer = 'jihunhong' }: Partial<Props>) => {
  return (
    <PostPreviewContainer>
      <div className="meta">
        <div className="author">
          <Avatar
            src="https://avatars.githubusercontent.com/u/21700764?v=4"
            // TODO :: example image
          />
          <a>
            <h4>{writer}</h4>
          </a>
        </div>
        <a>
          <h2>{title}</h2>
          <h3>{content}</h3>
        </a>
      </div>
      <div className="thumb-container">
        <img
          width={200}
          height={134}
          src="https://miro.medium.com/fit/c/300/201/1*uPt_ccZmvCMnQahIs43ahg.png"
          // TODO :: example image
        />
      </div>
    </PostPreviewContainer>
  );
};

export default Post;
