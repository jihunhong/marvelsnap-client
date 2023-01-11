import { toast } from 'react-toastify';

/**
 * @description 특정 행동에 에러가 날 경우에 표시해주는 noti
 * @example 덱을 12장이아닌 상태로 제출하거나, 같은 카드를 덱에 추가하려는 행위
 */
const useBlockNotify = () => {
  const blockDeckAmount = () => toast.warn('덱은 12장의 카드로 구성해야 합니다');
  const blockDuplicateCard = () => toast.warn('이미 추가한 카드입니다');
  const blockEmptyTitle = () => toast.warn('덱 이름을 추가해주세요');

  return {
    blockDeckAmount,
    blockDuplicateCard,
    blockEmptyTitle,
  };
};

export default useBlockNotify;
