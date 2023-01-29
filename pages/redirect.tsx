import useAuthenticate from '@hooks/pb/useAuthenticate';
import AppLayout from '@layout/AppLayout';
import { ReactElement } from 'react';

const Redirect = () => {
  useAuthenticate();
  return <>Redirecting...</>;
};

Redirect.getLayout = (page: ReactElement) => <AppLayout>{page}</AppLayout>;
export default Redirect;
