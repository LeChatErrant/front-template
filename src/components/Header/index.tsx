import { Toolbar } from '@mui/material'
import Link from 'next/link'

import { StyledAppBar, StyledLogo } from './styles'

export default function Header() {
  return (
    <StyledAppBar position="sticky">
      <Toolbar>
        <Link href="/" passHref>
          <StyledLogo logoSize={'35px'} imagePath={'/images/next.svg'} />
        </Link>
      </Toolbar>
    </StyledAppBar>
  )
}
