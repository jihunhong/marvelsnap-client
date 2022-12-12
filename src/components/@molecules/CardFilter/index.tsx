import * as S from './style';

const CardFilter = () => {
  return (
    <S.CardFilterContainer>
      <section className="filter">
        <div className="header">
          <div className="title">KEYWORD</div>
          <div className="divider"></div>
        </div>
        <div className="selection"></div>
      </section>
      <section className="filter">
        <div className="header">
          <div className="title">COST</div>
          <div className="divider"></div>
        </div>
        <div className="selection">
          <S.Cost>
            <span>0</span>
          </S.Cost>
          <S.Cost>
            <span>1</span>
          </S.Cost>
          <S.Cost>
            <span>2</span>
          </S.Cost>
          <S.Cost>
            <span>3</span>
          </S.Cost>
          <S.Cost>
            <span>4</span>
          </S.Cost>
          <S.Cost>
            <span>5</span>
          </S.Cost>
          <S.Cost>
            <span>6+</span>
          </S.Cost>
        </div>
      </section>
      <section className="filter">
        <div className="header">
          <div className="title">POOL</div>
          <div className="divider"></div>
        </div>
        <div className="selection"></div>
      </section>
    </S.CardFilterContainer>
  );
};

export default CardFilter;
