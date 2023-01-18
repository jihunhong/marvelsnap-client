import { toast } from 'react-toastify';

const useApiNotify = () => {
  const postDeckSuccess = () => toast.success('저장되었습니다!');
  const postDeckError = () => toast.error('덱 공유에 실패했습니다. 잠시후 다시 시도해주세요');
  const getRequestError = () => toast.error('API 응답이 올바르지 않습니다. \n 잠시후 다시 시도해주세요');
  const postCommentSuccess = () => toast.success('댓글이 작성되었습니다');
  const postCommentError = () => toast.success('댓글 작성이 실패했습니다. \n 잠시후 다시 시도해주세요');
  const postScoreSuccess = () => toast.success('평점이 반영되었습니다');
  const postScoreError = () => toast.success('평점이 반영에 실패했습니다. \n 잠시후 다시 시도해주세요');

  return {
    postDeckSuccess,
    postDeckError,
    getRequestError,
    postCommentSuccess,
    postCommentError,
    postScoreSuccess,
    postScoreError,
  };
};

export default useApiNotify;
