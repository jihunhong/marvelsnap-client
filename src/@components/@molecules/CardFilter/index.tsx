import Button from '@atoms/Button';
import Cost from '@atoms/Cost';
import { BiLoaderCircle, BiMoveHorizontal } from 'react-icons/bi';
import { BsExclamationTriangle, BsFillTrashFill, BsLightning } from 'react-icons/bs';
import { FaSkull } from 'react-icons/fa';
import { GiBatteryPackAlt, GiCardDiscard, GiGlassBall } from 'react-icons/gi';
import { IoMdClose, IoMdCloseCircleOutline } from 'react-icons/io';
import { TiSortAlphabeticallyOutline } from 'react-icons/ti';
import * as S from './style';

const CardFilter = ({ onClick }) => {

  return (
    <S.CardFilterContainer>
      <div className="content">
        <section className="filter">
          <div className="header">
            <div className="title">SORT</div>
            <div className="divider"></div>
          </div>
          <S.SortSelect onClick={onClick}>
            <div data-type="sort" data-value="en">
              <TiSortAlphabeticallyOutline />
              이름
            </div>
            <div data-type="sort" data-value="cost">
              <GiGlassBall />
              에너지
            </div>
            <div data-type="sort" data-value="power">
              <GiBatteryPackAlt />
              파워
            </div>
          </S.SortSelect>
        </section>
        <section className="filter">
          <div className="header">
            <div className="title">KEYWORD</div>
            <div className="divider"></div>
          </div>
          <S.KeywordSelect onClick={onClick}>
            <div data-type="keyword" data-value="출현">
              <BsLightning size={16} />출현
            </div>
            <div data-type="keyword" data-value="지속">
              <BiLoaderCircle size={16} />
              지속
            </div>
            <div data-type="keyword" data-value="능력없음">
              <BsExclamationTriangle size={16} />
              능력없음
            </div>
            <div data-type="keyword" data-value="버리기">
              <GiCardDiscard size={16} />
              버리기
            </div>
            <div data-type="keyword" data-value="이동">
              <BiMoveHorizontal size={16} />
              이동
            </div>
            <div data-type="keyword" data-value="파괴">
              <FaSkull size={16} />
              파괴
            </div>
          </S.KeywordSelect>
        </section>
        <section className="filter">
          <div className="header">
            <div className="title">COST</div>
            <div className="divider"></div>
          </div>
          <div className="selection" onClick={onClick}>
            <Cost amount={0} data-type='cost' data-value={0} />
            <Cost amount={1} data-type='cost' data-value={1} />
            <Cost amount={2} data-type='cost' data-value={2} />
            <Cost amount={3} data-type='cost' data-value={3} />
            <Cost amount={4} data-type='cost' data-value={4} />
            <Cost amount={5} data-type='cost' data-value={5} />
            <Cost amount='6+' data-type='cost' data-value={6} />
          </div>
        </section>
        <section className="filter">
          <div className="header">
            <div className="title">POOL</div>
            <div className="divider"></div>
          </div>
          <div className="selection" onClick={onClick}>
            <S.Folded data-type="grade" data-value={1}>I</S.Folded>
            <S.Folded data-type="grade" data-value={2}>II</S.Folded>
            <S.Folded data-type="grade" data-value={3}>III</S.Folded>
            <S.Folded data-type="grade" data-value={4}>IV</S.Folded>
            <S.Folded data-type="grade" data-value={5}>V</S.Folded>
          </div>
        </section>
        <Button icon={<BsFillTrashFill />} colorType="warn" onClick={onClick} data-type="reset">
            <span>필터 제거</span>
          </Button>
      </div>
    </S.CardFilterContainer>
  );
};

export default CardFilter;
