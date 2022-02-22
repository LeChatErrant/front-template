import { AppBar, Logo } from './styles'

export default function Header() {
  return (
    <AppBar>
      <Logo href="/" imagePath="/images/next.svg" width="35px" height="35px" />
    </AppBar>
  )
}
