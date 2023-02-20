import { pb } from '@lib/pb';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const useMatches = () => {
  const [matches, setMatches] = useState([]);
  const getMatches = async () => {
    return await pb.collection('matches').getList(1, 50, { sort: '-created', expand: 'user' });
  };
  useQuery(['matches'], getMatches, {
    onSuccess: response => setMatches(response.items),
    refetchOnMount: false,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    pb.collection('matches').subscribe('*', async ({ action, record }) => {
      if (action === 'create') {
        const user = await pb.collection('users').getOne(record.user);
        record.expand = { user };
        setMatches(origin => [...origin, record]);
      }
      if (action === 'delete') {
        setMatches(matches.filter(m => m.id !== record.id));
      }
    });

    return () => pb.collection('matches').unsubscribe();
  }, []);

  return [matches];
};

export default useMatches;
