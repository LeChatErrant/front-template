import DarkModeSwitch from '@components/DarkModeSwitch'
import { HeaderProps } from '@components/Header/props'

import { AppBar, Logo } from './styles'

export default function Header(props: HeaderProps) {
  return (
    <AppBar>
      <Logo href="/" imagePath="/images/next.svg" width="35px" height="35px" />
      <DarkModeSwitch
        width="100px"
        height="50px"
        checked={props.dark}
        onSwitch={props.toggleDarkTheme}
      />
    </AppBar>
  )
}
