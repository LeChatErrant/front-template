import { InputAdornment } from '@mui/material'
import { Search2 } from '@styled-icons/remix-line'

import * as S from './styles'

export default function SearchBar() {
  return (
    <S.InputBox
      variant="outlined"
      placeholder="Search article..."
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Search2 size={20} />
          </InputAdornment>
        ),
      }}
    />
  )
}
