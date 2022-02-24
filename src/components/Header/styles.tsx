import styled from 'styled-components'

import ImageLink from '../ImageLink'

export const AppBar = styled.div`
  position: sticky;
  top: 0;
  height: 75px;
  display: flex;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 0 20px;
`

export const Logo = styled(ImageLink)`
  filter: invert(${({ theme }) => (theme.dark ? 1 : 0)});
  transition: filter 0.2s;
`
