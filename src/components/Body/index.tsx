import { ReactNode } from 'react'

import * as S from './styles'

export default function Body({ children }: { children: ReactNode }) {
  return <S.Body>{children}</S.Body>
}
