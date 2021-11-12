import { IconButton, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CancelIcon from '@mui/icons-material/Cancel'
import styled from 'styled-components'
import { useState } from 'react'

const StyledInput = styled(TextField)`
  & .MuiOutlinedInput-root {
    padding-right: 0;

    & fieldset {
      border-radius: 120px;
    }
  }

  input {
  }
`

export default function SearchBar() {
  return (
    <StyledInput
      variant="outlined"
      size="small"
      placeholder="Search"
      onInput={(e) => {
        console.log(e.target.value)
      }}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          console.log(`Submited ${e.target.value}`)
        }
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: true ? (
          <IconButton>
            <CancelIcon />
          </IconButton>
        ) : null,
      }}
    />
  )
}
