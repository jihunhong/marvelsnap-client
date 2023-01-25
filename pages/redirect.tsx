import useAuthenticate from '@hooks/pb/useAuthenticate';

const Redirect = () => {
  useAuthenticate();
  return <>Redirecting...</>;
};

export default Redirect;
