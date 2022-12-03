import DarkModeSwitch from '@components/DarkModeSwitch'
import SearchBar from '@components/SearchBar'
import Spacer from '@components/Spacer'

import * as S from './styles'

export default function Toolbar() {
  return (
    <S.Toolbar>
      <SearchBar />
      <Spacer flex={1} />
      <DarkModeSwitch
        width="50px"
        height="25px"
        checked={true}
        onSwitch={() => {}}
      />
    </S.Toolbar>
  )
}
