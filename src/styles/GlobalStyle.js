import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
            font-size: 16px;
            box-sizing: border-box;
        }

    *, *:before, *:after {
            padding: 0;
            margin: 0;
            box-sizing: inherit;
            border: none;
        }

    body {
		    font-size: 1rem;
		    font-family: 'Roboto', sans-serif;
            color: #001f3f;
            background-color: #e2e9f8;
    }
    `;

export default GlobalStyle;
