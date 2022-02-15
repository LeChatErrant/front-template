import Icon from '@mui/material/Icon'
import Image from 'next/image'

import { StyledLogo } from './styles'

interface LogoProps {
  logoSize: string
  imagePath: string
}

export default function Logo({ logoSize, imagePath, ...props }: LogoProps) {
  return (
    <StyledLogo logo_size={logoSize} {...props}>
      <Icon>
        <Image src={imagePath} width={logoSize} height={logoSize} />
      </Icon>
    </StyledLogo>
  )
}
