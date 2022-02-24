import styled from 'styled-components'

import ImageLinkProps from '@components/ImageLink/props'

export const Container = styled.div<ImageLinkProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  cursor: pointer;
`
