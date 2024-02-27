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

  body, input, button {
    font-family: 'Open Sans', sans-serif;
    color: ${(props) => props.theme.colors.neutral.gray};
    font-size: 1rem;
    line-height: 1.4rem;
    font-weight: 400;
  }

  // [ ] rever necessidade -> não tem nenhuma referência no Figma
  /* ::-webkit-scrollbar {
    width: 0.625rem;  
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors["gray-400"]}; 
  }
 
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors["green-500"]}; 
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors["green-700"]}; 
  } */
`;
