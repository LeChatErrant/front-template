import { useRouter } from 'next/router'
import Link from 'next/link'
import { Typography } from '@mui/material'

export default function Post() {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Link href={'/'}>Home</Link>
      <Typography>{`Post ${id}`}</Typography>
    </>
  )
}
