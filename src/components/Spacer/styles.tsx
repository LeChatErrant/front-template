import styled from 'styled-components'

import { SpacerProps } from '@components/Spacer/props'

export const Spacer = styled.div<SpacerProps>`
  flex: ${({ flex }) => flex};
`
