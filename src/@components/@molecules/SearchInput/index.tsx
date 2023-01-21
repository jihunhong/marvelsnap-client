import CardImage from '@atoms/CardImg';
import { InputContainer, InputTag } from '@atoms/Input/style';
import * as T from '@customTypes/Card';
import useSearch from '@hooks/action/useSearch';
import { AnimatePresence, motion } from 'framer-motion';
import * as S from './style';

const SearchInput = () => {
  const { value, handler, data } = useSearch();
  return (
    <S.SearchInputContainer>
      <S.InputEntry>
        <InputContainer>
          <InputTag type="text" placeholder="덱, 카드이름으로 검색해보세요" value={value} onChange={handler} autoFocus />
        </InputContainer>
      </S.InputEntry>
      <AnimatePresence>
        {!!data?.length ? (
          <S.ResultEntry initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {data?.map((item: T.Card) => (
              <motion.div key={item.id} initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0 }}>
                <CardImage en={item?.en} />
                <span>{item.name}</span>
                <p>{item.effect}</p>
              </motion.div>
            ))}
          </S.ResultEntry>
        ) : null}
      </AnimatePresence>
    </S.SearchInputContainer>
  );
};

export default SearchInput;
