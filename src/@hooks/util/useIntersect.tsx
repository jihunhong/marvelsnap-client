import useToggle from '@hooks/useToggle';
import { useDebugValue, useEffect, useRef } from 'react';

/**
 * @param rootMargin: bottom barplayer pixel
 *
 */

const useIntersecting = (rootMargin = '0px 0px -62px 0px') => {
  const [visible, toggle] = useToggle(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, ob) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            toggle();
            ob.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin,
      },
    );
    if (ref?.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref]);
  useDebugValue([visible]);
  return { ref, visible };
};
export default useIntersecting;
