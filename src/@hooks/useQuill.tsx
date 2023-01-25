import { useState, useCallback, ChangeEvent, SetStateAction, Dispatch } from 'react';

const useQuill = (initValue: null | string = ''): [null | string, (content: string) => void, Dispatch<SetStateAction<string | null>>] => {
  const [value, setValue] = useState(initValue);
  const handler = useCallback((content: string) => {
    setValue(content);
  }, []);

  return [value, handler, setValue];
};

export default useQuill;
