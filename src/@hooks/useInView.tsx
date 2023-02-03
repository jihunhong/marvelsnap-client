import useToggle from '@hooks/useToggle';
import { useEffect } from 'react';

const useInView = ref => {
  const [visible, toggle, setVisible] = useToggle(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, ob) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
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
  }, [ref, flag]);
  return { ref, visible };
};
export default useInView;
