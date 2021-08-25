import { createGlobalStyle } from "styled-components";

import ImageAssets from "./assets/images/";
import ChicagoFont from "./assets/fonts/ChicagoFLF.ttf";

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  * {
    -ms-interpolation-mode: nearest-neighbor;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: -moz-crisp-edges;
    image-rendering: -o-pixelated;
    image-rendering: pixelated;
  }

  @font-face {
    font-family: "ChicagoFLF";
    src: url(${ChicagoFont}) format("truetype");
  }

  body {
    background-image: url(${ImageAssets.BackgroundImage});
    background-repeat: repeat;
    background-size: 64px;
    padding: 100px 32px;
    margin: 0;
    font-family: "ChicagoFLF", "Times New Roman", "Georgia", serif;
    font-size: 12px;
    font-weight: normal;
  }
  button {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }
  a {
    color: #000;
  }
  :focus {
    outline: none;
  }
  ::-moz-focus-inner {
    border: 0;
  }`;

export default GlobalStyle;
