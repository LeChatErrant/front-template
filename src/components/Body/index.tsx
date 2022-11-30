import { ReactNode } from 'react'

import { MainContainer } from '@components/Body/styles'

export default function Body({ children }: { children: ReactNode }) {
  return <MainContainer>{children}</MainContainer>
}
