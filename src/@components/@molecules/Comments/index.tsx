import Comment from '@atoms/Comment';
import * as S from './style';

const Comments = ({ dataSource }: any) => {
  return (
    <S.CommentsContainer>
      {Array.from({ length: 5 }).map((item, i) => (
        // TODO :: key props 수정
        <Comment
          key={i}
          writer={'jihunhong'}
          content={
            '내일은 댓글 쪽 db랑 등록 이벤트 hook 작성하고, 샘플 데이터는 넣을까 말까. 아 variants 이미지들 s3에 등록해놓고 데이터 한번 쭉봐야댐 그리고 Slider에 화살표 컴포넌트 추가해야됨 아 그리고 별점 관련 db랑 API도 작성하면될듯 다할수있을라나'
          }
        />
      ))}
    </S.CommentsContainer>
  );
};

export default Comments;
