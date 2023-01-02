import * as S from './style';

type Props = {
    amount: number | string
}

const Cost = ({ amount, ...props }: Props) => {

    return (
        <S.CostContainer {...props}>
            {amount}
        </S.CostContainer>
    )
}

export default Cost;