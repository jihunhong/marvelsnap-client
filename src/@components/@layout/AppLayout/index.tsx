import useMediaQuery from '@hooks/util/useMediaQuery';
import Body from '@layout/Body';
import Header from '@layout/Header';
import breakpoints from '@styles/breakpoints';
import dynamic from 'next/dynamic';

type Props = {
  children: JSX.Element;
};

const Footer = dynamic(() => import('@layout/Footer'));
const MobileHeader = dynamic(() => import('@layout/MobileHeader'), {
  ssr: false,
});

const AppLayout = ({ children }: Props) => {
  const [tabletWidth] = useMediaQuery(breakpoints.tablet);
  return (
    <>
      {tabletWidth ? <MobileHeader /> : <Header />}
      <Body>{children}</Body>
      <Footer />
    </>
  );
};

export default AppLayout;
