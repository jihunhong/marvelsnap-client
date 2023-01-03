import DivisionLayout from "src/@components/@layout/DivisionLayout";
import BuilderStatus from "src/@components/@molecules/BuilderStatus";
import CardList from "src/@components/@molecules/CardList";
import PageIntro from "src/@components/@molecules/PageIntro";
import { NextPage } from "next";
import { dehydrate, QueryClient } from "react-query";
import keys from "@query/keys";
import { fetchCardList } from "src/@fetch";
import useCardList from "@hooks/queries/useCardList";

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([keys.cardList, null], fetchCardList);

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

const Builder: NextPage = () => {    
    const [{ data }, onClick] = useCardList();
    return (
        <>
            <PageIntro
                title="Deck Builder"
                description=""
                bgSource="https://earlygame.com/uploads/images/_body/FutureMarvelSnap-Banner.jpg"
            />
           <DivisionLayout>
                <CardList dataSource={data} />
                <BuilderStatus />
           </DivisionLayout>
        </>
    )
}

export default Builder;