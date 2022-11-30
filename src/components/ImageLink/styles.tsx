import styled from 'styled-components'

import ImageLinkProps from './props'

export const ImageLinkContainer = styled.div<ImageLinkProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  cursor: pointer;
`
