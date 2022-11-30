import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { SWRConfig } from 'swr'

import Layout from '@components/Layout'
import useDarkMode from '@hooks/useDarkMode'
import { GlobalStyles, getTheme } from '@utils/theme'

async function fetcher(input: RequestInfo, init: RequestInit) {
  const res = await fetch(input, init)
  return res.json()
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const { dark, toggleDarkTheme } = useDarkMode()
  return (
    <SWRConfig
      value={{
        fetcher,
        refreshInterval: 3000,
      }}
    >
      <Head>
        <title> Front template </title>
      </Head>
      <MuiThemeProvider theme={getTheme(dark)}>
        <CssBaseline />
        <GlobalStyles />
        <StyledComponentsThemeProvider theme={getTheme(dark)}>
          <Layout toggleDarkTheme={toggleDarkTheme} dark={dark}>
            <Component {...pageProps} />
          </Layout>
        </StyledComponentsThemeProvider>
      </MuiThemeProvider>
    </SWRConfig>
  )
}
