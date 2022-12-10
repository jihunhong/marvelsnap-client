import { createGlobalStyle } from 'styled-components';
import { HEADER_HEIGHT } from './setting';
import { PRIMARY_COLOR } from './color';

export const GlobalStyle = createGlobalStyle`
    :root {
        --header-height: ${HEADER_HEIGHT};
        --primary-color: ${PRIMARY_COLOR};
    }
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    #__next {
        align-items: stretch;
        display: flex;
        flex-direction: column;
        position: relative;
    }
    
    h1, h2, h3, h4, h5, span, p {
        color: #fff;
        margin: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }
`;
