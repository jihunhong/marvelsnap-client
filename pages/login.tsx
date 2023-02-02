import LoginTemplate from '@components/@template/login';
import AppLayout from '@layout/AppLayout';
import PageIntro from '@molecules/PageIntro';
import { ReactElement } from 'react';

const Login = () => {
  return (
    <>
      <PageIntro title="Login" description="" bgSource="https://assets-prd.ignimgs.com/2022/05/18/multiplecard-showcase-d1-v2-1652904981819.png" />
      <section>
        <LoginTemplate />
      </section>
    </>
  );
};

Login.getLayout = (page: ReactElement) => <AppLayout>{page}</AppLayout>;
export default Login;
