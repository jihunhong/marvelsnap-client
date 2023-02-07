import LoginTemplate from '@components/@template/login';
import backgroundUrls from '@constant/intro-background';
import AppLayout from '@layout/AppLayout';
import PageIntro from '@molecules/PageIntro';
import { ReactElement } from 'react';

const Login = () => {
  return (
    <>
      <PageIntro title="Login" description="" bgSource={backgroundUrls.login} />
      <section>
        <LoginTemplate />
      </section>
    </>
  );
};

Login.getLayout = (page: ReactElement) => <AppLayout>{page}</AppLayout>;
export default Login;
