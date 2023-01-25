import { createGlobalStyle } from 'styled-components';
import { HEADER_HEIGHT } from './setting';
import * as C from './color';

export const GlobalStyle = createGlobalStyle`
    :root {
        --header-height: ${HEADER_HEIGHT};
        --primary-color: ${C.PRIMARY_COLOR};
        --primary-light-color: ${C.PRIMARY_LIGHT_COLOR};
        --secondary-color: ${C.SECONDARY_COLOR};
        --secondary-light-color: ${C.SECONDARY_LIGHT_COLOR};
        --warn-color: ${C.WARN_COLOR};
        --warn-light-color: ${C.WARN_LIGHT_COLOR};
        --success-color: ${C.SUCCSS_COLOR};
        --success-light-color: ${C.SUCCESS_LIGHT_COLOR};
        --gray-0: #cacaca;
        --gray-1: #a3a0a0;
        --gray-2: #868484;
        --white: #fff;
        --black-background: #161819;

        --card-offset: 16px;
        // 카드 이미지 container와 실제 카드 이미지의 간격

        --layer-header: 10;
        --layer-content: 20;
        --layer-modal: 100;
    }
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
    html * {
        outline: none;
    }
    html:has(dialog[open]) {
        overflow: hidden;
    }
    body {
        background-color: #161819;
        overflow: overlay;
        max-width: 100%;
        overflow-x: hidden;
    }

    #__next {
        align-items: stretch;
        display: flex;
        flex-direction: column;
        position: relative;
    }
    
    h1, h2, h3, h4, h5, span, p {
        color: rgb(255 255 255 / 95%);
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }
`;
