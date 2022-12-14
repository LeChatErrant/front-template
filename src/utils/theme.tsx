import { createTheme } from '@mui/material'
import { createGlobalStyle } from 'styled-components'

/**
 * Extend material UI theme to add new variables
 */
declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    gradient: string
  }

  interface TypeText {
    inverted: string
  }
}
/**
 * Light theme
 */
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    text: {
      inverted: 'white',
    },
    background: {
      gradient: `
        linear-gradient(
          135deg,
          rgba(2, 0, 36, 1) 0%,
          rgba(65, 65, 65, 1) 50%,
          rgba(2, 0, 36, 1) 100%
        )
      `,
    },
  },
})

/**
 * Dark theme
 */
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      inverted: 'black',
    },
    background: {
      gradient: `
        linear-gradient(
          135deg,
          rgba(255, 255, 255, 1) 0%,
          rgba(190, 190, 190, 1) 50%,
          rgba(255, 255, 255, 1) 100%
        )
      `,
    },
  },
})

/**
 * Return current theme depending on the given parameter
 *
 * @param dark True for dark theme, false otherwise
 * @returns Current theme
 */
export function resolveTheme(dark: boolean) {
  return dark ? darkTheme : lightTheme
}

/**
 * CSS applied on the whole application
 */
export const InjectGlobalStyle = createGlobalStyle`
  * {
    font-size: 16px;
    font-family: "Roboto";
    transition: color, background-color 0.2s linear;
  }

  h1 {
    font-size: 32px;
    letter-spacing: .1rem;
    margin: 0;
  }
`
