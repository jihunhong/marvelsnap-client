import useBlockNotify from '@hooks/notify/useBlockNotify';
import usePostScore from '@query/usePostScore';
import useScoreList from '@query/useScoreList';
import useUser from '@query/useUser';
import { useLayoutEffect, useState } from 'react';

const useRatingStar = ({ collectionId, recordId }: { collectionId: string; recordId: string }) => {
  const { avg } = useScoreList({ collectionId, recordId });
  const [score, setScore] = useState(0);
  const [select, setSelect] = useState(0);
  const [mutate] = usePostScore({ collectionId, recordId });
  const [user] = useUser();
  const notify = useBlockNotify();

  useLayoutEffect(() => {
    setScore(parseInt(avg));
  }, [avg]);

  const onHover = (e: MouseEvent) => {
    let value = 0;
    if (e?.target?.dataset?.score) value = e?.target?.dataset.score;
    setSelect(parseInt(value));
  };
  const onClick = (e: MouseEvent) => {
    if (!(e.target instanceof SVGElement)) return;
    const value = e.target?.dataset.score;
    if (value) {
      setScore(parseInt(value));
      if (!!user === false) {
        return notify.loginAccessNotify();
      }
      mutate({ collectionId, recordId, score: parseInt(value) });
    }
  };

  return { score, select, onClick, onHover };
};

export default useRatingStar;
