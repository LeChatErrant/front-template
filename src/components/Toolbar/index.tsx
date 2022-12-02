import SearchBar from '@components/SearchBar'

import * as S from './styles'

export default function Toolbar() {
  return (
    <S.Toolbar>
      <SearchBar />
      <div>Le reste de la toolbar</div>
    </S.Toolbar>
  )
}
