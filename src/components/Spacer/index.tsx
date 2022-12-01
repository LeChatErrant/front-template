import { SpacerProps } from '@components/Spacer/props'

import * as S from './styles'

/**
 * Adjustable, empty spacer that can be used to tune the spacing between widgets in a flex layout
 */
export default function Spacer(props: SpacerProps) {
  return <S.Spacer {...props} />
}
