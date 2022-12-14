import { ToggleButton } from '@mui/material'
import styled from 'styled-components'

export const NavButton = styled(ToggleButton)`
  width: 72px;
  border: 0.5px solid rgba(0, 0, 0, 0);

  :hover {
    border: 0.5px solid rgba(0, 0, 0, 0.07);
  }

  &.Mui-selected {
    color: white;
    background: linear-gradient(
      135deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(65, 65, 65, 1) 50%,
      rgba(2, 0, 36, 1) 100%
    );
  }
`
