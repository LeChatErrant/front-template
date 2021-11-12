import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>App</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
