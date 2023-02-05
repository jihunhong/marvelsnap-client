import Button from '@atoms/Button';
import Cost from '@atoms/Cost';
import { DestroyIcon, DiscardIcon, MoveIcon, NoneAbilityIcon, OnGoingIcon, OnRevealIcon } from '@atoms/Icon';
import useCollectionFilter from '@hooks/useCollectionFilter';
import useCollectionStat from '@hooks/useCollectionStat';
import useToggle from '@hooks/useToggle';
import * as S from '@molecules/CardFilter/style';
import { BsFillTrashFill } from 'react-icons/bs';
import { GiBatteryPackAlt, GiGlassBall } from 'react-icons/gi';
import { HiSortAscending, HiSortDescending } from 'react-icons/hi';
import { TiSortAlphabeticallyOutline } from 'react-icons/ti';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { filterAtom } from 'src/@store/collectionList';

const CollectionFilter = () => {
  const filter = useRecoilValue(filterAtom);
  const resetFilter = useResetRecoilState(filterAtom);
  const [onClick] = useCollectionFilter();
  const [ascend, handler] = useToggle(true);
  const series = useCollectionStat();

  return (
    <S.CardFilterContainer key="filter" initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
      <div className="content">
        <section className="filter">
          <div className="header">
            <div className="title">SORT</div>
            <div className="divider"></div>
          </div>
          <S.SortSelect>
            <div data-type="sort" data-value="en" data-direction={ascend ? 'asc' : 'descend'} onClick={onClick}>
              <TiSortAlphabeticallyOutline />
              <span>이름</span>
            </div>
            <div data-type="sort" data-value="cost" data-direction={ascend ? 'asc' : 'descend'} onClick={onClick}>
              <GiGlassBall />
              <span>에너지</span>
            </div>
            <div data-type="sort" data-value="power" data-direction={ascend ? 'asc' : 'descend'} onClick={onClick}>
              <GiBatteryPackAlt />
              <span>파워</span>
            </div>
            <div onClick={handler}>
              {ascend ? (
                <>
                  <HiSortAscending />
                  <span>오름차순</span>
                </>
              ) : (
                <>
                  <HiSortDescending />
                  <span>내림차순</span>
                </>
              )}
            </div>
          </S.SortSelect>
        </section>
        <section className="filter">
          <div className="header">
            <div className="title">KEYWORD</div>
            <div className="divider"></div>
          </div>
          <S.KeywordSelect active={filter?.value}>
            <div data-type="keyword" data-value="출현" onClick={onClick}>
              <OnRevealIcon />
              <span>출현</span>
            </div>
            <div data-type="keyword" data-value="지속" onClick={onClick}>
              <OnGoingIcon />
              <span>지속</span>
            </div>
            <div data-type="keyword" data-value="능력없음" onClick={onClick}>
              <NoneAbilityIcon />
              <span>능력없음</span>
            </div>
            <div data-type="keyword" data-value="버리기" onClick={onClick}>
              <DiscardIcon />
              <span>버리기</span>
            </div>
            <div data-type="keyword" data-value="이동" onClick={onClick}>
              <MoveIcon />
              <span>이동</span>
            </div>
            <div data-type="keyword" data-value="파괴" onClick={onClick}>
              <DestroyIcon />
              <span>파괴</span>
            </div>
          </S.KeywordSelect>
        </section>
        <section className="filter">
          <div className="header">
            <div className="title">COST</div>
            <div className="divider"></div>
          </div>
          <S.PickSelect active={filter?.type === 'cost' ? filter?.value : null}>
            <Cost amount={0} data-type="cost" data-value={0} onClick={onClick} />
            <Cost amount={1} data-type="cost" data-value={1} onClick={onClick} />
            <Cost amount={2} data-type="cost" data-value={2} onClick={onClick} />
            <Cost amount={3} data-type="cost" data-value={3} onClick={onClick} />
            <Cost amount={4} data-type="cost" data-value={4} onClick={onClick} />
            <Cost amount={5} data-type="cost" data-value={5} onClick={onClick} />
            <Cost amount="6+" data-type="cost" data-value={6} onClick={onClick} />
          </S.PickSelect>
        </section>
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
        <Button icon={<BsFillTrashFill />} colorType="warn" onClick={resetFilter}>
          <span>필터 제거</span>
        </Button>
      </div>
    </S.CardFilterContainer>
  );
};

export default CollectionFilter;
