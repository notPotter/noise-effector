import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";
import { Styles } from "./Styles";

export const GlobalStyle = createGlobalStyle`
  ${reset};

  html {
    ${Styles.FullWidthAndHeight}
  }

  body {
    ${Styles.ScrollBarNone}
    ${Styles.FullWidthAndHeight}
  }

  #root {
    ${Styles.FullWidthAndHeight}
    overflow: hidden;
  }
  
  img {
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  button {
    all: unset;
    cursor: pointer;

    :hover {
      filter: brightness(0.8);
    }
    :active {
      filter: brightness(0.7);
    }
  }
`;
