import * as S from "./style";

type Props = {
    children: JSX.Element
}

const Body = ({ children }: Props) => {
    return (
        <S.BodyContainer>
            {children}
        </S.BodyContainer>
    )
}

export default Body;