import styled from 'styled-components'
import { AppBar } from '@mui/material'

import Logo from '../Logo'

export const StyledAppBar = styled(AppBar)`
  background-color: white;

  & > * {
    padding: 0;
  }
`

export const StyledLogo = styled(Logo)`
  margin: 0 5px;
`