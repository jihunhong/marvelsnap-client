import Body from '@layout/Body';
import Footer from '@layout/Footer';
import Header from '@layout/Header';
import useUser from '@query/useUser';

type Props = {
  children: JSX.Element;
};

const AppLayout = ({ children }: Props) => {
  useUser();
  return (
    <>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </>
  );
};

export default AppLayout;
