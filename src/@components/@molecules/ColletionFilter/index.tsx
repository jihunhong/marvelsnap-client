import Button from '@atoms/Button';
import useCollectionFilter from '@hooks/useCollectionFilter';
import useCollectionStat from '@hooks/useCollectionStat';
import useToggle from '@hooks/useToggle';
import * as S from '@molecules/CardFilter/style';
import { BsFillTrashFill } from 'react-icons/bs';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { filterAtom } from 'src/@store/collectionList';

const CollectionFilter = () => {
  const filter = useRecoilValue(filterAtom);
  const [onClick] = useCollectionFilter();
  const series = useCollectionStat();

  return (
    <S.CardFilterContainer key="filter" initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
      <div className="content">
        <section className="filter">
          <div className="header">
            <div className="title">POOL</div>
            <div className="divider"></div>
          </div>
          <S.PickSelect className="collection" active={filter?.type === 'grade' ? filter?.value : null}>
            <S.CollectionFolded data-type="grade" data-value={1} onClick={onClick} $percent={series ? ((series?.[1].mine / series?.[1].count) * 100).toFixed(1) : '100'}>
              <span>Series 1</span>
              <span>{`${series?.[1].mine}/${series?.[1].count}`}</span>
            </S.CollectionFolded>
            <S.CollectionFolded data-type="grade" data-value={2} onClick={onClick} $percent={series ? ((series?.[2].mine / series?.[2].count) * 100).toFixed(1) : '100'}>
              <span>Series 2</span>
              <span>{`${series?.[2].mine}/${series?.[2].count}`}</span>
            </S.CollectionFolded>
            <S.CollectionFolded data-type="grade" data-value={3} onClick={onClick} $percent={series ? ((series?.[3].mine / series?.[3].count) * 100).toFixed(1) : '100'}>
              <span>Series 3</span>
              <span>{`${series?.[3].mine}/${series?.[3].count}`}</span>
            </S.CollectionFolded>
            <S.CollectionFolded data-type="grade" data-value={4} onClick={onClick} $percent={series ? ((series?.[4].mine / series?.[4].count) * 100).toFixed(1) : '100'}>
              <span>Series 4</span>
              <span>{`${series?.[4].mine}/${series?.[4].count}`}</span>
            </S.CollectionFolded>
            <S.CollectionFolded data-type="grade" data-value={5} onClick={onClick} $percent={series ? ((series?.[5].mine / series?.[5].count) * 100).toFixed(1) : '100'}>
              <span>Series 5</span>
              <span>{`${series?.[5].mine}/${series?.[5].count}`}</span>
            </S.CollectionFolded>
          </S.PickSelect>
        </section>
      </div>
    </S.CardFilterContainer>
  );
};

export default CollectionFilter;
