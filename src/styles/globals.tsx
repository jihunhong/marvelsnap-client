import { createGlobalStyle } from 'styled-components';
import * as C from './color';
import { HEADER_HEIGHT } from './setting';

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
        --plain-color: ${C.PLAIN_COLOR};
        --plain-light-color: ${C.PLAIN_LIGHT_COLOR};
        --gray-0: #cacaca;
        --gray-1: #a3a0a0;
        --gray-2: #868484;
        --white: rgb(255 255 255 / 95%);
        --black-background: #161819;
        --white-border-color: rgba(255,255,255,0.1);

        --card-ratio: calc(100% * calc(334 / 260));
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
        text-shadow: 0px 0px 1px rgb(255 255 255 / 30%);
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }

    .quill {
        .ql-snow {
            border: none;
        }
        .ql-toolbar {
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
        }
        .ql-container {
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
        }
        .ql-editor.ql-blank {
            :before {
            color: var(--white);
            }
        }
        .ql-toolbar .ql-stroke {
            fill: none;
            stroke: #fff;
        }

        .ql-toolbar .ql-fill {
            fill: #fff;
            stroke: none;
        }

        .ql-toolbar .ql-picker {
            color: #fff;
        }
    }
`;
