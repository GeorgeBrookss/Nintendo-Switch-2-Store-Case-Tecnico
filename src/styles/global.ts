import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
}

button {
    cursor: pointer;
}
`