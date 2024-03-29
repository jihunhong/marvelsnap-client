import useMediaQuery from '@hooks/util/useMediaQuery';
import Body from '@layout/Body';
import Header from '@layout/Header';
import { MobileHeaderContainer } from '@layout/MobileHeader/style';
import breakpoints from '@styles/breakpoints';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

type Props = {
  children: JSX.Element | Array<JSX.Element>;
};

const Footer = dynamic(() => import('@layout/Footer'));
const MobileHeader = dynamic(() => import('@layout/MobileHeader'), {
  ssr: false,
  loading: () => <MobileHeaderContainer></MobileHeaderContainer>,
});

const AppLayout = ({ children }: Props) => {
  const [tabletWidth] = useMediaQuery(breakpoints.tablet);
  const router = useRouter();
  if (router.asPath.includes('/editor')) return <>{children}</>;
  return (
    <>
      {tabletWidth ? <MobileHeader /> : <Header />}
      <Body>{children}</Body>
      <Footer />
    </>
  );
};

export default AppLayout;
