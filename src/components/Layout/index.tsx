import { Divider } from '@mui/material'
import { ReactNode } from 'react'

import Body from '@components/Body'
import Footer from '@components/Footer'
import Header from '@components/Header'
import { LayoutProps } from '@components/Layout/props'
import { AppLayout } from '@components/Layout/styles'

export default function Layout({
  children,
  toggleDarkTheme,
  dark,
}: { children: ReactNode } & LayoutProps) {
  return (
    <AppLayout>
      <Header toggleDarkTheme={toggleDarkTheme} dark={dark} />
      <Divider orientation="vertical" flexItem />
      <Body>{children}</Body>
      <Divider orientation="vertical" flexItem />
      <Footer />
    </AppLayout>
  )
}
