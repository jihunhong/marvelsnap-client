import useCopyCode from '@hooks/deck/useDeckCode';
import CardGrid from '@molecules/CardGrid';
import CommentInput from '@molecules/CommentInput';
import Comments from '@molecules/Comments';
import DeckCode from '@molecules/DeckCode';
import Recommend from '@molecules/Recommend';
import useDeckInfoQuery from '@query/useDeckInfo';
import dynamic from 'next/dynamic';
import * as S from './style';

const RawHtml = dynamic(() => import('@atoms/RawHtml'), {
  ssr: false,
});

const DeckDetailTemplate = () => {
  const [data] = useDeckInfoQuery();
  const [handler, encoded] = useCopyCode({ title: data?.title, items: data?.expand?.items });
  return (
    <S.DeckDetailTemplateContainer>
      <section className="deck-info">
        <CardGrid {...data} />
        <section className="meta"></section>
      </section>
      <section className="description">
        <RawHtml content={data?.description} />
      </section>
      <section className="actions">
        <DeckCode placeholder="" value={encoded} onClick={handler} />
        <Recommend {...data} />
      </section>
      <CommentInput {...data} />
      <Comments {...data} />
    </S.DeckDetailTemplateContainer>
  );
};

export default DeckDetailTemplate;
