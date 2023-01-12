import * as T from '@customTypes/Card';
import useNotify from '@hooks/notify/useNotify';
import copy from '@lib/copty';
import { encode } from '@lib/deck';
import isClient from '@lib/isClient';
import { SyntheticEvent } from 'react';

const useCopyCode = ({ title, items }: { title: string; items: Array<T.Card> }) => {
  const notify = useNotify();
  const handler = (e: SyntheticEvent) => {
    if (!(e.target instanceof HTMLDivElement || e.currentTarget instanceof HTMLDivElement)) {
      return;
    }
    if (isClient()) {
      const text = encode({ title, items });
      copy(text).then(() => {
        notify.copySuccess();
      });
    }
  };

  return [handler];
};

export default useCopyCode;
