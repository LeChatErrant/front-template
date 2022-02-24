import { useState } from 'react'

import { DarkModeSwitchProps } from '@components/DarkModeSwitch/props'

import {
  BaseContainer,
  CustomToggle,
  InvisibleInput,
  ToggleContainer,
} from './styles'

export default function DarkModeSwitch(props: DarkModeSwitchProps) {
  const [checked, setChecked] = useState(props.checked)

  return (
    <BaseContainer {...props}>
      <InvisibleInput
        type="checkbox"
        checked={checked}
        onChange={async () => {
          setChecked(!checked)
          props.onSwitch(!checked)
        }}
      />
      <ToggleContainer>
        <CustomToggle />
      </ToggleContainer>
    </BaseContainer>
  )
}
