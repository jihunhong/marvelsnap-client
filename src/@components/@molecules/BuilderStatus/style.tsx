import styled from "styled-components";
import { CardRowContainer } from "src/@components/@atoms/CardRow/style";


export const BuilderStatusContainer = styled.section`
    > * {
        width: 100%;
    }
    
    .content {
        display: grid;
        grid-template-rows: 24px;
        row-gap: 10px;
        min-height: var(--min-height);
    }

    
    .deck-data {
        display: grid;
        grid-template-rows: repeat(12, 40px);
        row-gap: 1px;
        border-style: dashed;
        border-color: var(--gray-2);
        padding: 12px;
        border-radius: 12px;
        max-height: 515px;

        ${CardRowContainer} {
            border-radius: 8px;
            box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
        }
    }
`