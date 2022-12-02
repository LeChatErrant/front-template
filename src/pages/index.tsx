import Head from 'next/head'

import Feed from '@components/Feed'
import Panel from '@components/Panel'

import * as S from './styles'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <S.HomeLayout>
        <Feed />
        <Panel />
      </S.HomeLayout>
    </>
  )
}
