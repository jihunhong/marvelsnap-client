import { BiLoaderCircle, BiMoveHorizontal } from 'react-icons/bi';
import { BsExclamationTriangle, BsLightning } from 'react-icons/bs';
import { FaSkull } from 'react-icons/fa';
import { GiBatteryPackAlt, GiCardDiscard, GiGlassBall } from 'react-icons/gi';
import { TiSortAlphabeticallyOutline } from 'react-icons/ti';
import Cost from 'src/@components/@atoms/Cost';
import * as S from './style';

const CardFilter = () => {
  return (
    <S.CardFilterContainer>
      <div className="content">
        <section className="filter">
          <div className="header">
            <div className="title">SORT</div>
            <div className="divider"></div>
          </div>
          <S.SortSelect>
            <div>
              <TiSortAlphabeticallyOutline />
              이름
            </div>
            <div>
              <GiGlassBall />
              에너지
            </div>
            <div>
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
          <S.KeywordSelect>
            <div>
              <BsLightning size={16} /> 출현
            </div>
            <div>
              <BiLoaderCircle size={16} />
              지속
            </div>
            <div>
              <BsExclamationTriangle size={16} />
              능력없음
            </div>
            <div>
              <GiCardDiscard size={16} />
              버리기
            </div>
            <div>
              <BiMoveHorizontal size={16} />
              이동
            </div>
            <div>
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
          <div className="selection">
            <Cost amount={0} />
            <Cost amount={1} />
            <Cost amount={2} />
            <Cost amount={3} />
            <Cost amount={4} />
            <Cost amount={5} />
            <Cost amount='6+' />
          </div>
        </section>
        <section className="filter">
          <div className="header">
            <div className="title">POOL</div>
            <div className="divider"></div>
          </div>
          <div className="selection">
            <S.Folded>I</S.Folded>
            <S.Folded>II</S.Folded>
            <S.Folded>III</S.Folded>
            <S.Folded>IV</S.Folded>
            <S.Folded>V</S.Folded>
          </div>
        </section>
      </div>
    </S.CardFilterContainer>
  );
};

export default CardFilter;
