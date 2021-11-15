import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

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
