import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        min-height: 100vh;
        background: url("./images/kyrie.jpeg") no-repeat ;
        background-size: 100vw 100vh;
        background-color: black;

    }

`;
