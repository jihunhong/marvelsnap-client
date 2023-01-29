import { useRouter } from 'next/router';
import { SyntheticEvent } from 'react';

const useNavigate = ({ href = '/' }: { href: string }) => {
  const router = useRouter();
  const onClick = (e: SyntheticEvent) => {
    router.push(href);
  };
  return [onClick];
};

export default useNavigate;
