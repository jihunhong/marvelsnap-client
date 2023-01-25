import { useRouter } from 'next/router';
import { SyntheticEvent } from 'react';

const useNavigation = ({ href = '/' }: { href: string }) => {
  const router = useRouter();
  const onClick = (e: SyntheticEvent) => {
    router.push(href);
  };
  return [onClick];
};

export default useNavigation;
