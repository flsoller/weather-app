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
            color: #F3F3F3;
            background-color: #1C252C;
    }
    `;

export default GlobalStyle;
