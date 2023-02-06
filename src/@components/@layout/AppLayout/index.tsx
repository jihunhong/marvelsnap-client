import { breakpoints } from '@constant/breakpoints';
import useSize from '@hooks/util/useSize';
import Body from '@layout/Body';
import Footer from '@layout/Footer';
import Header from '@layout/Header';
import MobileHeader from '@layout/MobileHeader';

type Props = {
  children: JSX.Element;
};

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
