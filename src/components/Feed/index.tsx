import Topics from '@components/Feed/Topics'

import Toolbar from './Toolbar'
import Trending from './Trending'
import * as S from './styles'

export default function Feed() {
  return (
    <S.Feed>
      <Toolbar />
      <Trending />
      <Topics />
    </S.Feed>
  )
}
