import { postMetaDeckApi } from '@fetch/index';
import useApiNotify from '@hooks/notify/useApiNotify';
import { ChangeEvent, useState } from 'react';
import { useMutation } from 'react-query';
import { useRecoilValue } from 'recoil';
import { getIds } from 'src/@store/builder';

const useMetaDeckForm = (): [Record<string, string>, (e: ChangeEvent<HTMLInputElement>) => void, () => void] => {
  const [values, setValues] = useState({
    title: '',
    description: '',
    origin: '',
    writer: '',
  });
  const addedCardsIds = useRecoilValue(getIds);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const notify = useApiNotify();
  const { mutate } = useMutation(postMetaDeckApi, {
    onSuccess: () => {
      notify.postDeckSuccess();
    },
    onError: err => {
      alert(err);
    },
  });

  const onSubmit = () => {
    const validate = [...Object.values(values)].every(v => v);
    if (validate) {
      mutate({ ...values, items: addedCardsIds });
      return;
    }
    console.log(values);
    return;
  };

  return [values, onChange, onSubmit];
};

export default useMetaDeckForm;
