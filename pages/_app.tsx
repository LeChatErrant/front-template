import type { AppProps } from 'next/app'
import Head from 'next/head'
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import { ThemeProvider } from 'styled-components'
import Layout from '../components/Layout'
import theme from '../utils/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>App</title>
        <link href="/favicon/favicon-32x32.png" rel="icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
          rel="stylesheet"
        />
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
