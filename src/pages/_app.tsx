import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { SWRConfig } from 'swr'

import Layout from '@components/Layout'
import { InjectGlobalStyle, resolveTheme } from '@utils/theme'

async function fetcher(input: RequestInfo, init: RequestInit) {
  const res = await fetch(input, init)
  return res.json()
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const [dark, toggleDarkTheme] = useState(false)
  const theme = resolveTheme(dark)

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
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <InjectGlobalStyle />
        <StyledComponentsThemeProvider theme={theme}>
          <Layout dark={dark} toggleDarkTheme={toggleDarkTheme}>
            <Component {...pageProps} />
          </Layout>
        </StyledComponentsThemeProvider>
      </MuiThemeProvider>
    </SWRConfig>
  )
}
