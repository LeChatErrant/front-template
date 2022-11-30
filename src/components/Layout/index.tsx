import { Divider } from '@mui/material'
import { ReactNode } from 'react'

import Body from '@components/Body'
import NavBar from '@components/NavBar'
import Panel from '@components/Panel'

import { LayoutProps } from './props'
import * as S from './styles'

export default function Layout({
  children,
  toggleDarkTheme,
  dark,
}: { children: ReactNode } & LayoutProps) {
  return (
    <S.AppLayout>
      <NavBar toggleDarkTheme={toggleDarkTheme} dark={dark} />
      <Divider orientation="vertical" flexItem />
      <Body>{children}</Body>
      <Divider orientation="vertical" flexItem />
      <Panel />
    </S.AppLayout>
  )
}
