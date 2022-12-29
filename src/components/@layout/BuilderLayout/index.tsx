import * as S from "./style";

type Props = {
    children: JSX.Element
}

const DivisionLayout = ({ children }:Props) => {
    
    return (
        <S.DivisionLayoutContainer>
            {children}
        </S.DivisionLayoutContainer>
    )
}

export default DivisionLayout;