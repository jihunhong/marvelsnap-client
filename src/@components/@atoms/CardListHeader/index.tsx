import Button from '@atoms/Button';
import { BsFilter, BsReceiptCutoff } from 'react-icons/bs';
import * as S from './style';

type CardListHeaderProps = {
  filterEvent: () => void;
};

const CardListHeader = ({ filterEvent }: CardListHeaderProps) => {
  // const onClick = e => {
  //   dataSource.slice(0, 12).forEach(item => add(e, item));
  // };

  return (
    <S.CardListHeaderContainer>
      {/* <Button icon={<TbSettings />} colorType="warn" onClick={onClick} /> */}
      <Button icon={<BsReceiptCutoff />} colorType="primary" onClick={filterEvent} />
      <Button icon={<BsFilter />} colorType="success" onClick={filterEvent} />
    </S.CardListHeaderContainer>
  );
};

export default CardListHeader;
