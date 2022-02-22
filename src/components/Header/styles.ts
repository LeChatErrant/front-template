import styled from 'styled-components'

import ImageLink from '../ImageLink'

export const AppBar = styled.div`
  position: sticky;
  top: 0;
  height: 60px;
  display: flex;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadow};
`

export const Logo = styled(ImageLink)`
  margin: 0 20px;
  filter: invert(${({ theme }) => (theme.dark ? 1 : 0)});
`
