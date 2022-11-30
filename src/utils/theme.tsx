import { createTheme } from '@mui/material'
import { createGlobalStyle } from 'styled-components'

/**
 * Common CSS used in both dark and light theme
 */
export const baseTheme = createTheme({
  typography: {
    fontFamily: 'Roboto',
    fontSize: 16,
  },
})

/**
 * Dark theme
 */
export const darkTheme = createTheme(baseTheme, {
  palette: {
    mode: 'dark',
  },
})

/**
 * Light theme
 */
export const lightTheme = createTheme(baseTheme, {
  palette: {
    mode: 'light',
  },
})

/**
 * Return current theme depending on the given parameter
 *
 * @param dark True to get dark theme, false otherwise
 * @returns Current theme
 */
export function getTheme(dark: boolean) {
  return dark ? darkTheme : lightTheme
}

/**
 * CSS applied on the whole application
 */
export const GlobalStyles = createGlobalStyle`
  * {
    transition: color, background-color 0.2s linear;
  }
`
