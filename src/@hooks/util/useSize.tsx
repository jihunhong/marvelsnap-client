import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

const useSize = (): [number] => {
  const [size, setSize] = useState(0);
  const handleSize = useCallback(() => {
    setSize(window?.innerWidth || 0);
  }, []);

  useLayoutEffect(() => {
    handleSize();
    window.addEventListener('resize', handleSize);
    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);
  return [size];
};

export default useSize;
