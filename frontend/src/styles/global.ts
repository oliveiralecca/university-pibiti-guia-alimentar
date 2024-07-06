import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${(props) => props.theme.colors.neutral.white};
    -webkit-font-smoothing: antialiased;
  } 

  body, input, button, select, option {
    font-family: 'Open Sans', sans-serif;
    color: ${(props) => props.theme.colors.neutral.gray};
    font-size: 1rem;
    line-height: 1.4rem;
    font-weight: 400;
  }

  p {
    line-height: 25px;
  }

  @media (max-width: 768px) {
    p {
      font-size: ${({ theme }) => theme.fontSize.paragraph2};
      line-height: 30px;
    } 
  }
`;
