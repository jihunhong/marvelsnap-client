import { Dispatch, KeyboardEvent, SetStateAction, useCallback } from 'react';

const useKeyDown = (key: string, callback: () => void, resetter: Dispatch<SetStateAction<string | null>>) => {
  const handler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === key && !e.shiftKey) {
        callback();
      }
      resetter(null);
    },
    [callback],
  );
  return [handler];
};

export default useKeyDown;
