import { createTheme } from '@mui/material'

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    gradient: string
  }
}

export default createTheme({
  palette: {
    primary: {
      main: '#0000ff',
    },
    secondary: {
      main: '#00ff00',
    },
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
})
