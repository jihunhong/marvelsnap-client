import Body from "../Body";
import Header from "../Nav";

type Props = {
    children: JSX.Element
}

const AppLayout = ({ children }: Props) => {
    return (
        <><Header />
        <Body>{children}</Body>
        </>
    )
}

export default AppLayout;