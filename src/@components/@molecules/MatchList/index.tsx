import MatchMessage from '@atoms/MatchMessage';
import * as S from './style';

const MatchList = ({ dataSource }: { dataSource: any[] }) => {
  return (
    <S.MatchListContainer>
      {dataSource?.map(item => (
        <MatchMessage {...item} key={item.id} user={item.expand?.user} />
      ))}
    </S.MatchListContainer>
  );
};

export default MatchList;
