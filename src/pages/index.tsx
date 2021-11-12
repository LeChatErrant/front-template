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
        <title>Create Next App</title>
      </Head>
      <Title>Hello world !</Title>
      <Link href="/post/id">To post</Link>
    </>
  )
}
