import LoginTemplate from '@components/@template/login';
import backgroundUrls from '@constant/intro-background';
import PageIntro from '@molecules/PageIntro';

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

export default Login;
