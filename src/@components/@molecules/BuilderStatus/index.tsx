import Input from 'src/@components/@atoms/Input';
import * as S from './style';


const BuilderStatus = () => {

    return (
        <S.BuilderStatusContainer>
            <div className="content">
                <Input placeholder='# 덱 이름을 입력해주세요' />
                <div className='deck-data'>
                    {/* {
                        Array(12).fill().map(() => (
                            <CardRow cost={1} />
                        ))
                    } */}
                </div>
            </div>
        </S.BuilderStatusContainer>
    )

}

export default BuilderStatus;