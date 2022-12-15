import { Bookmarks } from '@styled-icons/boxicons-regular/Bookmarks'
import { Edit } from '@styled-icons/boxicons-regular/Edit'
import { Home } from '@styled-icons/boxicons-regular/Home'
import { LogOut } from '@styled-icons/boxicons-regular/LogOut'
import { Settings2Outline } from '@styled-icons/evaicons-outline/Settings2Outline'
import Link from 'next/link'
import { useState } from 'react'

import Spacer from '@components/Spacer'

import NavButton from './NavButton'
import { NavBarProps } from './props'
import * as S from './styles'

export default function NavBar(props: NavBarProps) {
  const [index, setIndex] = useState(0)

  return (
    <S.NavBar>
      <Link href="/" onClick={() => setIndex(0)}>
        <S.HomeImage src="/images/next.svg" alt="Home" width={40} height={40} />
      </Link>
      <NavButton
        href="/"
        navButtonIndex={0}
        navBarCurrentIndex={index}
        setIndex={setIndex}
      >
        <Home size={30} />
      </NavButton>
      <NavButton
        href="/bookmarks"
        navButtonIndex={1}
        navBarCurrentIndex={index}
        setIndex={setIndex}
      >
        <Bookmarks size={30} />
      </NavButton>
      <NavButton
        href="/write"
        navButtonIndex={2}
        navBarCurrentIndex={index}
        setIndex={setIndex}
      >
        <Edit size={30} />
      </NavButton>
      <Spacer flex={1} />
      <S.NavDarkMode
        width="30px"
        height="30px"
        dark={props.dark}
        toggleDarkMode={() => {
          props.toggleDarkTheme(!props.dark)
        }}
      />
      <NavButton
        href="/settings"
        navButtonIndex={3}
        navBarCurrentIndex={index}
        setIndex={setIndex}
      >
        <Settings2Outline size={30} />
      </NavButton>
      <NavButton
        href="/logout"
        navButtonIndex={4}
        navBarCurrentIndex={index}
        setIndex={setIndex}
      >
        <LogOut size={30} />
      </NavButton>
    </S.NavBar>
  )
}
