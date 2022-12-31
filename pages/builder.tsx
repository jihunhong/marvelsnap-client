import DivisionLayout from "src/@components/@layout/DivisionLayout";
import BuilderStatus from "src/@components/@molecules/BuilderStatus";
import CardList from "src/@components/@molecules/CardList";
import PageIntro from "src/@components/@molecules/PageIntro";
import { NextPage } from "next";

const Builder: NextPage = () => {
    

    return (
        <>
            <PageIntro
                title="Deck Builder"
                description=""
                bgSource="https://earlygame.com/uploads/images/_body/FutureMarvelSnap-Banner.jpg"
            />
           <DivisionLayout>
                <CardList />
                <BuilderStatus />
           </DivisionLayout>
        </>
    )
}

export default Builder;