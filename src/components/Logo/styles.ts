import styled from 'styled-components'
import IconButton from '@mui/material/IconButton'

export const StyledLogo = styled(IconButton)<{ logoSize: string }>`
  & > * {
    width: ${(props) => props.logoSize};
    height: ${(props) => props.logoSize};
  }
`
