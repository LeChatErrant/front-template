import { createTheme } from '@mui/material'
import { createGlobalStyle } from 'styled-components'

/**
 * Light theme
 */
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
})

/**
 * Dark theme
 */
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
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
`
