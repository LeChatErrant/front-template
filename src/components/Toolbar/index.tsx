import SearchBar from '@components/SearchBar'
import Spacer from '@components/Spacer'

import * as S from './styles'

export default function Toolbar() {
  return (
    <S.Toolbar>
      <SearchBar />
      <Spacer flex={1} />
    </S.Toolbar>
  )
}
