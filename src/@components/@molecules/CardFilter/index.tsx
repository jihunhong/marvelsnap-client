import Button from '@atoms/Button';
import Cost from '@atoms/Cost';
import { DestroyIcon, DiscardIcon, ManaIcon, MoveIcon, NoneAbilityIcon, OnGoingIcon, OnRevealIcon, PowerIcon } from '@atoms/Icon';
import useCardFilter from '@hooks/useCardFilter';
import useToggle from '@hooks/useToggle';
import { BsFillTrashFill } from 'react-icons/bs';
import { HiSortAscending, HiSortDescending } from 'react-icons/hi';
import { TiSortAlphabeticallyOutline } from 'react-icons/ti';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { filterAtom } from 'src/@store/cardList';
import * as S from './style';

const CardFilter = () => {
  const filter = useRecoilValue(filterAtom);
  const resetFilter = useResetRecoilState(filterAtom);
  const [onClick] = useCardFilter();
  const [ascend, handler] = useToggle(true);

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
              <ManaIcon />
              <span>에너지</span>
            </div>
            <div data-type="sort" data-value="power" data-direction={ascend ? 'asc' : 'descend'} onClick={onClick}>
              <PowerIcon />
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
          <S.PickSelect active={filter?.type === 'grade' ? filter?.value : null}>
            <S.Folded data-type="grade" data-value={1} onClick={onClick}>
              <span>Series 1</span>
            </S.Folded>
            <S.Folded data-type="grade" data-value={2} onClick={onClick}>
              <span>Series 2</span>
            </S.Folded>
            <S.Folded data-type="grade" data-value={3} onClick={onClick}>
              <span>Series 3</span>
            </S.Folded>
            <S.Folded data-type="grade" data-value={4} onClick={onClick}>
              <span>Series 4</span>
            </S.Folded>
            <S.Folded data-type="grade" data-value={5} onClick={onClick}>
              <span>Series 5</span>
            </S.Folded>
          </S.PickSelect>
        </section>
        <Button icon={<BsFillTrashFill />} colorType="warn" onClick={resetFilter}>
          <span>필터 제거</span>
        </Button>
      </div>
    </S.CardFilterContainer>
  );
};

export default CardFilter;
