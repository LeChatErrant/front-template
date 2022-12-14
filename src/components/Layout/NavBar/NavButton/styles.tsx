import { ToggleButton } from '@mui/material'
import styled from 'styled-components'

export const NavButton = styled(ToggleButton)`
  width: 72px;
  border: 0.5px solid transparent;

  :hover {
    border: 0.5px solid ${({ theme }) => theme.palette.divider};
  }

  &.Mui-selected {
    color: ${({ theme }) => theme.palette.text.inverted};
    background: ${({ theme }) => theme.palette.background.gradient};
  }
`
