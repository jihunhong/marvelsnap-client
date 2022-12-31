import Body from "@layout/Body";
import Header from "@layout/Header";


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
