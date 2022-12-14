import Image from 'next/image'
import styled, { css } from 'styled-components'

import DarkModeSwitch from './DarkModeSwitch'

export const NavBar = styled.nav`
  position: sticky;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;

  width: 140px;
  height: 100vh;
  padding: 55px 0;
  border-right: 0.5px solid ${({ theme }) => theme.palette.divider};
`

export const HomeImage = styled(Image)`
  margin-bottom: 35px;

  ${({ theme }) =>
    theme.palette.mode === 'dark' &&
    css`
      filter: invert(100%);
    `}
`

export const NavDarkMode = styled(DarkModeSwitch)`
  margin: 12px 0;
`
