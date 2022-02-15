import styled from 'styled-components'
import IconButton from '@mui/material/IconButton'

export const StyledLogo = styled(IconButton)<{ logo_size: string }>`
  & > * {
    width: ${(props) => props.logo_size};
    height: ${(props) => props.logo_size};
  }
`
