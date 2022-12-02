import Body from '../Body';
import Header from '../Header';

type Props = {
  children: JSX.Element;
};

const AppLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Body>{children}</Body>
      <footer></footer>
    </>
  );
};

export default AppLayout;
