import { CacheProvider, EmotionCache } from '@emotion/react'
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { SWRConfig } from 'swr'

import Layout from '@components/Layout'
import createEmotionCache from '@utils/emotionCache'
import { InjectGlobalStyle, resolveTheme } from '@utils/theme'

async function fetcher(input: RequestInfo, init: RequestInit) {
  const res = await fetch(input, init)
  return res.json()
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface CustomAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: CustomAppProps) {
  const [dark, toggleDarkTheme] = useState(false)
  const theme = resolveTheme(dark)

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <CacheProvider value={emotionCache}>
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
    </CacheProvider>
  )
}
