import * as S from './style';

type Props = {
    amount: number | string
}

const Cost = ({ amount }: Props) => {

    return (
        <S.CostContainer>
            <span>{amount}</span>
        </S.CostContainer>
    )
}

export default Cost;