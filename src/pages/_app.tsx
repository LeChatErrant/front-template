import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { SWRConfig } from 'swr'

import Layout from '../components/Layout'
import { getTheme, initTheme, toggleTheme } from '../utils/theme'

async function fetcher(input: RequestInfo, init: RequestInit) {
  const res = await fetch(input, init)
  return res.json()
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState(initTheme())
  return (
    <SWRConfig
      value={{
        fetcher,
        refreshInterval: 3000,
      }}
    >
      <Layout>
        <Head>
          <title> Front template </title>
        </Head>
        <MuiThemeProvider theme={getTheme(mode)}>
          <CssBaseline />
          <ThemeProvider theme={getTheme(mode)}>
            <button onClick={() => setMode(toggleTheme(mode))}>
              Switch Theme (wip)
            </button>
            <Component {...pageProps} />
          </ThemeProvider>
        </MuiThemeProvider>
      </Layout>
    </SWRConfig>
  )
}
