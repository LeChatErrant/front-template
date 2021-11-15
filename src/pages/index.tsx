import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

const Title = styled.h1`
  color: blue;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Title>Home!</Title>
      <Link href="/post/id">To post</Link>
    </>
  )
}
