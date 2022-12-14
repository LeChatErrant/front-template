import Spacer from '@components/Spacer'

import SearchBar from './SearchBar'
import * as S from './styles'

export default function Toolbar() {
  return (
    <S.Toolbar>
      <SearchBar />
      <Spacer flex={1} />
    </S.Toolbar>
  )
}
