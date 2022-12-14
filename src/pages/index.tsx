import Head from 'next/head'
import styled from 'styled-components'

import Feed from '@components/Feed'
import Panel from '@components/Panel'

export const HomeLayout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HomeLayout>
        <Feed />
        <Panel />
      </HomeLayout>
    </>
  )
}
