import { TextField } from '@mui/material'
import styled from 'styled-components'

export const InputBox = styled(TextField)`
  width: 45%;

  fieldset {
    border-radius: 999px;
    border-color: rgba(0, 0, 0, 0.12);
  }

  input {
    padding: 16px 40px;
    font-size: 0.9em;
  }
`
