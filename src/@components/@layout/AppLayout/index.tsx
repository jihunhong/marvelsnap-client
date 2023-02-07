import { breakpoints } from '@constant/breakpoints';
import useSize from '@hooks/util/useSize';
import Body from '@layout/Body';
import Header from '@layout/Header';
import dynamic from 'next/dynamic';

type Props = {
  children: JSX.Element;
};

const Footer = dynamic(() => import('@layout/Footer'));
const MobileHeader = dynamic(() => import('@layout/MobileHeader'), {
  ssr: false,
});

const AppLayout = ({ children }: Props) => {
  const [size] = useSize();
  return (
    <>
      {size < breakpoints.laptop ? <MobileHeader /> : <Header />}
      <Body>{children}</Body>
      <Footer />
    </>
  );
};

export default AppLayout;
