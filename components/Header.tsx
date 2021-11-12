import { AppBar, Icon, IconButton, Toolbar } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import SearchBar from './SearchBar'

const NavBar = styled(AppBar)`
  background-color: white;

  & > * {
    padding: 0;
  }
`

const logoSize = 35
const Logo = styled(IconButton)`
  margin: 0 25px;

  & > * {
    width: ${logoSize}px;
    height: ${logoSize}px;
  }
`

export default function Header() {
  return (
    <NavBar position="sticky">
      <Toolbar>
        <Link href="/">
          <Logo>
            <Icon>
              <Image
                src="/images/next.svg"
                width={logoSize}
                height={logoSize}
              />
            </Icon>
          </Logo>
        </Link>
        <SearchBar />
      </Toolbar>
    </NavBar>
  )
}
