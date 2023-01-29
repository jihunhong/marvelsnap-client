import useToggle from '@hooks/useToggle';
import { useEffect } from 'react';

const useMobileCheck = () => {
  const [flag, _, setFlag] = useToggle(false);
  useEffect(() => {
    const agent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
    const check = Boolean(agent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));
    setFlag(check);
  }, [setFlag]);
  return [flag];
};

export default useMobileCheck;
