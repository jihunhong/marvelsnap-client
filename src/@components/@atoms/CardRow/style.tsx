import styled from "styled-components";
import { CostContainer } from "../Cost/style";


export const CardRowContainer = styled.article`
    display: flex;
    align-items: center;
    border-radius: 6px;
    height: 40px;
    padding: 8px;
    // background: linear-gradient(90deg, rgb(226, 159, 118) 30%, rgba(226, 159, 118, 0) 70%), url(https://cdn-lor.mobalytics.gg/production/images/cards-preview/06PZ020.png) right center no-repeat;

    ${CostContainer} {
        width: 22px;
        height: 22px;
    }
`