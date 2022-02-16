import IconButton from '@mui/material/IconButton'
import styled from 'styled-components'

export const StyledLogo = styled(IconButton)<{ logo_size: string }>`
  & > * {
    width: ${(props) => props.logo_size};
    height: ${(props) => props.logo_size};
  }
`
