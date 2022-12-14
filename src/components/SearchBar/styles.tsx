import { TextField } from '@mui/material'
import styled from 'styled-components'

export const InputBox = styled(TextField)`
  width: 45%;

  fieldset {
    border-radius: 999px;
    border-color: ${({ theme }) => theme.palette.divider};
  }

  svg {
    margin-right: 20px;
  }

  input {
    padding: 0px 40px;
    height: 50px;
    font-size: 0.9em;
  }
`
