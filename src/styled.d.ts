import { Theme } from '@mui/material'
import 'styled-components'

/**
 * Extend the theme passed in props of styled components
 */
declare module 'styled-components' {
  export type DefaultTheme = Theme
}
