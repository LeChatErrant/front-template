import { createTheme } from '@mui/material'

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    gradient: string
  }
}

export default createTheme({
  palette: {
    primary: {
      main: 'blue',
    },
    secondary: {
      main: 'red',
    },
    text: {
      primary: 'black',
      secondary: 'white',
    },
    background: {
      default: 'white',
      gradient: 'linear-gradient(45deg, #833AB4, #FD1D1D, #FCB045)',
    },
    error: {
      main: 'red',
    },
  },
})
