import { Bookmarks } from '@styled-icons/boxicons-regular/Bookmarks'
import { Edit } from '@styled-icons/boxicons-regular/Edit'
import { Home } from '@styled-icons/boxicons-regular/Home'
import { LogOut } from '@styled-icons/boxicons-regular/LogOut'
import { Settings2Outline } from '@styled-icons/evaicons-outline/Settings2Outline'
import Image from 'next/image'
import Link from 'next/link'

import DarkModeSwitch from '@components/DarkModeSwitch'
import { NavBarProps } from '@components/NavBar/props'
import Spacer from '@components/Spacer'

import * as S from './styles'

export default function NavBar(props: NavBarProps) {
  return (
    <S.NavBar>
      <Link href="/">
        <Image src="/images/next.svg" alt="Home" width={40} height={40} />
      </Link>
      <Link href="/">
        <Home size={30} />
      </Link>
      <Link href="/">
        <Bookmarks size={30} />
      </Link>
      <Link href="/">
        <Edit size={30} />
      </Link>
      <Spacer flex={1} />
      <DarkModeSwitch
        width="30px"
        height="30px"
        dark={props.dark}
        toggleDarkMode={() => {
          props.toggleDarkTheme(!props.dark)
        }}
      />
      <Link href="/">
        <Settings2Outline size={30} />
      </Link>
      <Link href="/">
        <LogOut size={30} />
      </Link>
    </S.NavBar>
  )
}
