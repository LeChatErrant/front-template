import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
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
      <ThemeProvider theme={getTheme(dark)}>
        <GlobalStyles />
        <Layout toggleDarkTheme={toggleDarkTheme} dark={dark}>
          <button onClick={toggleDarkTheme}>Switch Theme (wip)</button>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SWRConfig>
  )
}
