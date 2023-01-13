import useToggle from '@hooks/useToggle';
import { useEffect, useRef } from 'react';

const useInView = () => {
  const ref = useRef(null);
  const [visible, toggle] = useToggle(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, ob) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          toggle();
          ob.unobserve(entry.target);
        }
      });
    });
    if (ref?.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref, toggle]);
  return { ref, visible };
};
export default useInView;
