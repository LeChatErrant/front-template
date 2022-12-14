import { ReactNode } from 'react'

import Body from './Body'
import NavBar from './NavBar'
import { LayoutProps } from './props'
import * as S from './styles'

export default function Layout(props: { children: ReactNode } & LayoutProps) {
  return (
    <S.AppLayout>
      <NavBar dark={props.dark} toggleDarkTheme={props.toggleDarkTheme} />
      <Body>{props.children}</Body>
    </S.AppLayout>
  )
}
