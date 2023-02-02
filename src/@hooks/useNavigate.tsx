import { useRouter } from 'next/router';
import { SyntheticEvent } from 'react';

const useNavigate = ({ href = '/', as, scroll = false }: { href: string; as?: any; scroll?: boolean }) => {
  const router = useRouter();
  const onClick = (e: SyntheticEvent) => {
    router.push(href, as, { scroll, shallow: true });
  };
  return [onClick];
};

export default useNavigate;
