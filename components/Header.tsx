import {
  AppBar,
  Icon,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

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

const SearchBar = styled(TextField)`
  & .MuiOutlinedInput-root {
    & fieldset {
      border-radius: 10px;
    }
  }

  input {
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
        <SearchBar
          variant="outlined"
          size="small"
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Toolbar>
    </NavBar>
  )
}
