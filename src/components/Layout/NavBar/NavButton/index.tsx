import { ReactNode } from 'react'

import { NavButtonProps } from '@components/Layout/NavBar/NavButton/props'
import Link from '@components/Link'

import * as S from './styles'

export default function NavButton(
  props: { children: ReactNode } & NavButtonProps
) {
  return (
    <Link href={props.href}>
      <S.NavButton
        value="check"
        selected={props.navButtonIndex === props.navBarCurrentIndex}
        onChange={() => {
          props.setIndex(props.navButtonIndex)
        }}
      >
        {props.children}
      </S.NavButton>
    </Link>
  )
}
