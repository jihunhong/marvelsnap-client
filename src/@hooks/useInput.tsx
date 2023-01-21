import { useState, useCallback, ChangeEvent, SetStateAction, Dispatch } from 'react';

const useInput = (initValue: null | string = ''): [null | string, (e: ChangeEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<string | null>>] => {
  const [value, setValue] = useState(initValue);
  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return [value, handler, setValue];
};

export default useInput;
