import { DefaultTheme, createGlobalStyle } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    dark: boolean
    text: {
      primary: string
      secondary: string
    }
    background: {
      default: string
      gradient: string
    }
    shadow: string
  }
}

export const lightTheme: DefaultTheme = {
  dark: false,
  text: {
    primary: '#000000',
    secondary: '#ffffff',
  },
  background: {
    default: '#ffffff',
    gradient: 'linear-gradient(45deg, #833AB4, #FD1D1D, #FCB045)',
  },
  shadow: '3px 6px 10px rgba(0, 0, 0, 0.15)',
}

export const darkTheme: DefaultTheme = {
  dark: true,
  text: {
    primary: '#ffffff',
    secondary: '#000000',
  },
  background: {
    default: '#000000',
    gradient: 'linear-gradient(45deg, #833AB4, #FD1D1D, #FCB045)',
  },
  shadow: '0 6px 10px rgba(255, 255, 255, 0.15)',
}

export function getTheme(dark: boolean) {
  return dark ? darkTheme : lightTheme
}

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background.default};
    color: ${({ theme }) => theme.text.primary};

    font-family: Roboto;
    font-size: 16px;
    border-radius: 8px;
    margin: 0;
  }
  
  * {
    transition: color,background-color 0.2s linear;
  }
`
