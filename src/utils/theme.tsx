import { createTheme } from '@mui/material'

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    gradient: string
  }
}

export const lightTheme = createTheme({
  palette: {
    text: {
      primary: '#000000',
      secondary: '#ffffff',
    },
    background: {
      default: '#ffffff',
      gradient: 'linear-gradient(45deg, #833AB4, #FD1D1D, #FCB045)',
    },
    error: {
      main: '#ff0000',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 16,
  },
})

export const darkTheme = createTheme({
  palette: {
    text: {
      primary: '#ffffff',
      secondary: '#000000',
    },
    background: {
      default: '#000000',
      gradient: 'linear-gradient(45deg, #833AB4, #FD1D1D, #FCB045)',
    },
    error: {
      main: '#ff0000',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 16,
  },
})

export enum ThemeMode {
  LIGHT,
  DARK,
}

export function getTheme(mode: ThemeMode) {
  return mode === ThemeMode.LIGHT ? lightTheme : darkTheme
}

export function toggleTheme(mode: ThemeMode) {
  return mode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT
}

export function initTheme() {
  return ThemeMode.LIGHT
}
