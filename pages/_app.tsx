import type { AppProps } from 'next/app'
import Head from 'next/head'
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import Layout from '../components/Layout'
import theme from '../utils/theme'
import { ThemeProvider } from 'styled-components'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>App</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </MuiThemeProvider>
    </Layout>
  )
}
