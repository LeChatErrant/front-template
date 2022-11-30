import { ReactNode } from 'react'

import Body from '@components/Body'
import Footer from '@components/Footer'
import Header from '@components/Header'
import { LayoutProps } from '@components/Layout/props'

export default function Layout({
  children,
  toggleDarkTheme,
  dark,
}: { children: ReactNode } & LayoutProps) {
  return (
    <>
      <Header toggleDarkTheme={toggleDarkTheme} dark={dark} />
      <Body>{children}</Body>
      <Footer />
    </>
  )
}
