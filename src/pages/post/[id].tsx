import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Head>
        <title>{`Post ${id}`}</title>
      </Head>
      <h1>{`Post ${id}`}</h1>
      <Link href={'/'}>Go to Home</Link>
    </>
  )
}
