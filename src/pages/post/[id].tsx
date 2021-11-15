import { useRouter } from 'next/router'
import Link from 'next/link'
import { Typography } from '@mui/material'
import Head from 'next/head'

export default function Post() {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Head>
        <title>{`Post ${id}`}</title>
      </Head>
      <Link href={'/'}>Go to Home</Link>
      <Typography>{`Post ${id}`}</Typography>
    </>
  )
}
