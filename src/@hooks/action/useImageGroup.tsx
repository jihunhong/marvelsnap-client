import { useState } from 'react';

const useImageGroup = (initial = 0): [number, (index: number) => void] => {
  const [selectedIndex, setSeletedIndex] = useState(initial);
  const handleImageClick = (index: number) => {
    setSeletedIndex(index);
  };

  return [selectedIndex, handleImageClick];
};

export default useImageGroup;
