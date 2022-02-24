import { ReactNode } from 'react'

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
      <main>{children}</main>
      <Footer />
    </>
  )
}
