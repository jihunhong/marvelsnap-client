import { toast } from 'react-toastify';

const useApiNotify = () => {
  const postDeckSuccess = () => toast.success('저장되었습니다!');
  const postDeckError = () => toast.error('덱 공유에 실패했습니다. 잠시후 다시 시도해주세요');
  const getRequestError = () => toast.error('API 응답이 올바르지 않습니다. \n 잠시후 다시 시도해주세요');
  const postCommentSuccess = () => toast.success('댓글이 작성되었습니다');
  const postCommentError = () => toast.error('댓글 작성이 실패했습니다. \n 잠시후 다시 시도해주세요');
  const postScoreSuccess = () => toast.success('평점이 반영되었습니다');
  const postScoreError = () => toast.error('평점이 반영에 실패했습니다. \n 잠시후 다시 시도해주세요');
  const delCommentSuccess = () => toast.success('댓글이 삭제되었습니다.');
  const delCommentError = () => toast.error('댓글 삭제에 실패했습니다. \n 잠시후 다시 시도해주세요');

  const postLikeSuccess = () => toast.success('추천되었습니다.');
  const postLikeError = () => toast.error('추천 요청이 실패했습니다. \n 잠시후 다시 시도해주세요');
  const postLikeDuplicate = () => toast.warn('이미 추천한 게시물입니다.');

  const postCollectionSuccess = () => toast.success('컬렉션이 계정에 연동되었습니다.');
  const postCollectionError = () => toast.error('계정 연동에 실패했습니다. \n 잠시후 다시 시도해주세요');

  const loginError = () => toast.error('로그인 응답이 올바르지 않습니다. \n 잠시후 다시 시도해주세요');
  const collectionError = () => toast.error('컬렉션 정보를 확인할 수 없습니다.');

  return {
    postDeckSuccess,
    postDeckError,
    getRequestError,
    postCommentSuccess,
    postCommentError,
    postScoreSuccess,
    postScoreError,
    loginError,
    delCommentSuccess,
    delCommentError,
    postLikeSuccess,
    postLikeError,
    postLikeDuplicate,
    collectionError,
    postCollectionSuccess,
    postCollectionError,
  };
};

export default useApiNotify;
