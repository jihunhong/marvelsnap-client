import { useSetRecoilState } from 'recoil';
import { modalToggler } from 'src/@store/modal';

const useModalToggler = (key: string) => {
  const toggler = useSetRecoilState(modalToggler);
  const handler = () => {
    toggler(() => key);
  };

  return [handler];
};

export default useModalToggler;
