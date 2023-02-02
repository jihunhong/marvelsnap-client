import styled from 'styled-components';

export const TagContainer = styled.span`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  padding: 4px 7px;
  height: 22px;
  border-radius: 4px;
  text-shadow: 0px 0px 2px rgb(0 0 0 / 25%);
  svg {
    margin-right: 4px;
  }
  &[data-keyword='출현'] {
    background: linear-gradient(180deg, #ffc918 0%, #ffba01 100%);
  }
  &[data-keyword='파괴'] {
    background: linear-gradient(180deg, #e82727 0%, #cc1111 100%);
  }
  &[data-keyword='이동'] {
    background: linear-gradient(180deg, #64379e 0%, #3b1470 100%);
  }
  &[data-keyword='버리기'] {
    background: linear-gradient(180deg, #82c23a 0%, #4f9900 100%);
  }
  &[data-keyword='능력없음'] {
    background: linear-gradient(180deg, #3099d9 0%, #0e64b4 100%);
  }
  &[data-keyword='지속'] {
    background: linear-gradient(180deg, #292929 0%, #000 100%);
  }

  &[data-series='5'] {
    background: linear-gradient(180deg, #8d2fc8 0%, #7b1bb5 100%);
  }
  &[data-series='4'] {
    background: linear-gradient(180deg, #1660e5 0%, #0a58d4 100%);
  }
  &[data-series='3'] {
    background: linear-gradient(180deg, #19cda3 0%, #0cb186 100%);
  }
  &[data-series='2'] {
    background: linear-gradient(180deg, #5343b2 0%, #3b2f81 100%);
  }
  &[data-series='1'] {
    background: linear-gradient(180deg, #ed5949 0%, #f12711 100%);
  }
`;
