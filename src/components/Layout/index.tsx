import { ReactNode } from 'react'

import Body from '@components/Body'
import { LayoutProps } from '@components/Layout/props'
import NavBar from '@components/NavBar'

import * as S from './styles'

export default function Layout(props: { children: ReactNode } & LayoutProps) {
  return (
    <S.AppLayout>
      <NavBar dark={props.dark} toggleDarkTheme={props.toggleDarkTheme} />
      <Body>{props.children}</Body>
    </S.AppLayout>
  )
}
