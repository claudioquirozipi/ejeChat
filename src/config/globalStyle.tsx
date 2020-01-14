import MQ from "./media";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 6px;
    @media ${MQ.xs} {
      font-size: 8px;
    }
    @media ${MQ.sm} {
      font-size: 16px;
    }
    @media ${MQ.md} {
      font-size: 24px;
    }
    @media ${MQ.lg} {
      font-size: 32px;
    }
  }
`;

export default GlobalStyle;
