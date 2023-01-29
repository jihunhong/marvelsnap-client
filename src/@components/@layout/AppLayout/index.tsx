import Body from '@layout/Body';
import Footer from '@layout/Footer';
import Header from '@layout/Header';

type Props = {
  children: JSX.Element;
};

const AppLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </>
  );
};

export default AppLayout;
