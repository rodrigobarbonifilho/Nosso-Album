import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: Arial, Helvetica, sans-serif;
        padding: 0;
        margin: 0;
        border: none;
        outline: none;
        box-sizing: border-box;
    }

    html, .root {
        height: 100vh;
        overflow: hidden;
    }

    ::-webkit-scrollbar {
        display: none;
    }
`;
