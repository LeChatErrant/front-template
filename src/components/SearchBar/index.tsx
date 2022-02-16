import CancelIcon from '@mui/icons-material/Cancel'
import SearchIcon from '@mui/icons-material/Search'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { useState } from 'react'
import styled from 'styled-components'

const StyledInput = styled(TextField)`
  & .MuiOutlinedInput-root {
    width: 300px;
    padding-right: 0;

    & fieldset {
      border-radius: 120px;
    }
  }
`

export default function SearchBar() {
  const [input, setInput] = useState('')
  return (
    <StyledInput
      variant="outlined"
      size="small"
      placeholder="Search"
      value={input}
      onInput={(e) => {
        const target = e.target as HTMLTextAreaElement
        setInput(target.value)
      }}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          // TODO
        }
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment:
          input != '' ? (
            <IconButton onClick={() => setInput('')}>
              <CancelIcon />
            </IconButton>
          ) : null,
      }}
    />
  )
}
