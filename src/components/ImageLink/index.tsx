import Image from 'next/image'
import Link from 'next/link'

import ImageLinkProps from './props'
import { Container } from './styles'

export default function ImageLink(props: ImageLinkProps) {
  return (
    <Container {...props}>
      <Link href={props.href}>
        <Image src={props.imagePath} fill={true} alt={props.alt} />
      </Link>
    </Container>
  )
}
