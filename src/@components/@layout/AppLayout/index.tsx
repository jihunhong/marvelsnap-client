import Body from "src/@components/@layout/Body";
import Header from "src/@components/@layout/Header";


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
