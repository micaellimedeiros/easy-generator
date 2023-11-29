import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Segoe UI", Arial, sans-serif;
  }

  svg {
    cursor: pointer;
  }

  label {
    font-size: 0.88rem;
    color: #A8A8B3;

    margin-bottom: 0.5rem;
  }
`;
