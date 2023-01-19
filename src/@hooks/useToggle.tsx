import { Dispatch, SetStateAction, useCallback, useState } from 'react';

const useToggle = (initValue = false): [boolean, () => void, Dispatch<SetStateAction<boolean>>] => {
  const [value, setValue] = useState<boolean>(initValue);
  const handler = useCallback(() => {
    setValue(!value);
  }, [value]);

  return [value, handler, setValue];
};

export default useToggle;
