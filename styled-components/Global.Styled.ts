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
        background: url("./images/background.jpeg") no-repeat ;
        background-size: 1440px 100%;
        background-position: center;
        background-color: black;

        @media (min-width: 1440px) {
            background-size: 100% 100%;
        }

    }

`;
