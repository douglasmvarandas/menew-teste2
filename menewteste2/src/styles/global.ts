import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --textBody: #363636;
        --backgroundMenus: #FF0000;
        --GreyMenu: #BEBEBE;
        --Button: #EED5D2;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1120px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
        padding-bottom: 4rem;
    }

    button {
        cursor: point;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`