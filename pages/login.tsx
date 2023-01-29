import Button from '@atoms/Button';
import useProviders from '@hooks/pb/useProviders';
import AppLayout from '@layout/AppLayout';
import PageIntro from '@molecules/PageIntro';
import { ReactElement } from 'react';

const Login = () => {
  const [providers, handler] = useProviders();
  return (
    <>
      <PageIntro title="Login" description="" bgSource="https://assets-prd.ignimgs.com/2022/05/18/multiplecard-showcase-d1-v2-1652904981819.png" />
      {providers?.map(item => (
        <Button key={item?.name} onClick={handler?.bind(null, item)} data-url={item?.authUrl} data-name={item?.name} data-state={item?.state} data-code={item?.codeVerifier}>
          <span>{item.name}</span>
        </Button>
      ))}
    </>
  );
};

Login.getLayout = (page: ReactElement) => <AppLayout>{page}</AppLayout>;
export default Login;
