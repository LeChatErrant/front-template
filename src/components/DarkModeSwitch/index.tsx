import { useState } from 'react'

import { DarkModeSwitchProps } from './props'
import * as S from './styles'

export default function DarkModeSwitch(props: DarkModeSwitchProps) {
  const [checked, setChecked] = useState(props.checked)

  return (
    <S.BaseContainer {...props}>
      <S.InvisibleInput
        type="checkbox"
        checked={checked}
        onChange={async () => {
          setChecked(!checked)
          props.onSwitch(!checked)
        }}
      />
      <S.ToggleContainer>
        <S.CustomToggle />
      </S.ToggleContainer>
    </S.BaseContainer>
  )
}
