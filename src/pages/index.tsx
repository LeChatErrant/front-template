import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home!</h1>
      <Link href="/post/id">To post</Link>
    </>
  )
}
