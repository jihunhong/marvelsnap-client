import styled from 'styled-components';
import { MarkdownCss } from '@styles/markdown';

export const ArticleTemplateContainer = styled.div`
    .contents {
        ${MarkdownCss}
        margin-bottom: 2rem;
    }

    .actions {
        margin: 0 0 2rem;
    }
.`;
