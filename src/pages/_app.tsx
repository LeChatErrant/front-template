import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import { ThemeProvider } from 'styled-components'
import Layout from '../components/Layout'
import theme from '../utils/theme'

async function fetcher(input: RequestInfo, init: RequestInit) {
  const res = await fetch(input, init)
  return res.json()
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher,
        refreshInterval: 3000,
      }}
    >
      <Layout>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </MuiThemeProvider>
      </Layout>
    </SWRConfig>
  )
}
