import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Montserrat, sans-serif;
    }

    body {
        background: rgba(143, 205, 81, 0.84);
/* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        user-select: none; /* text-selection interferes with dragging */
    }
`

export default GlobalStyles
