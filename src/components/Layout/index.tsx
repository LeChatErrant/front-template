import { ReactNode } from 'react'

import Body from '@components/Body'
import NavBar from '@components/NavBar'

import * as S from './styles'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <S.AppLayout>
      <NavBar />
      <Body>{children}</Body>
    </S.AppLayout>
  )
}
