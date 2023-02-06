import { SyntheticEvent } from 'react';

const useActiveButtonGroup = () => {
  const onClick = (e: SyntheticEvent) => {
    if (!(e.target instanceof HTMLButtonElement)) {
      return;
    }
    const children = e.currentTarget.children;
    Array.from(children).forEach(el => el.classList.remove('active'));
    e.target.classList.add('active');
  };
  return [onClick];
};

export default useActiveButtonGroup;
