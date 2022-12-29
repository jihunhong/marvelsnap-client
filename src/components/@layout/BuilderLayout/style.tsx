import styled from "styled-components";
import { BuilderStatusContainer } from "../../@molecules/BuilderStatus/style";
import { CardListContainer } from "../../@molecules/CardList/style";


export const DivisionLayoutContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(13, 1fr);
    grid-template-areas: "card card card card card card card card offset filter filter filter";
    overscroll: none;

    ${CardListContainer} {
        grid-area: card;
    }

    --fixed-padding-top: calc(var(--header-height) * 2);
    --min-height: calc(100vh - var(--header-height));
    > section:nth-of-type(2) {
        position: relative;
        grid-area: filter;
        
        .content {
            position: sticky;
            top: var(--fixed-padding-top);
            min-height: var(--min-height);    
        }
    }
    
`