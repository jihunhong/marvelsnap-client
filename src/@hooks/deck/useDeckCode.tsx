import * as T from '@customTypes/Card';
import useNotify from '@hooks/notify/useNotify';
import copy from '@lib/copty';
import { encode } from '@lib/deck';
import { SyntheticEvent } from 'react';

const useCopyCode = ({ title, items }: { title: string; items: Array<T.Card> }): [(e: SyntheticEvent) => void, string] => {
  const notify = useNotify();
  const encoded = encode({ title, items });
  const handler = (e: SyntheticEvent) => {
    if (encoded) {
      copy(encoded).then(() => {
        notify.copySuccess();
      });
    }
  };

  return [handler, encoded];
};

export default useCopyCode;
