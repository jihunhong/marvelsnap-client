import Cost from 'src/@components/@atoms/Cost';
import * as S from './style';
import * as T from '@customTypes/Card';


const CardRow = ({ cost, name }: T.Card) => {

    return (
        <S.CardRowContainer>
            <Cost amount={cost} />
            <p>{name}</p>
        </S.CardRowContainer>
    )
}

export default CardRow;