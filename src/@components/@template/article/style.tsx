import { RawHtmlContainer } from '@atoms/RawHtml/style';
import styled from 'styled-components';

export const ArticleTemplateContainer = styled.div`

    .header {
    }
    .contents {
        ${RawHtmlContainer} {
            p:has(img) {
                display: flex;
                justify-content: center;
            }
            img {
                border-radius: 6px;
                max-width: 600px;
            }
        }
        padding: 2rem 0;
    }

    .actions {
        margin: 0 0 2rem;
    }
.`;
