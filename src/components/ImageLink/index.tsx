import Image from 'next/image'
import Link from 'next/link'

import ImageLinkProps from './props'
import * as S from './styles'

export default function ImageLink(props: ImageLinkProps) {
  return (
    <S.ImageLinkContainer {...props}>
      <Link href={props.href}>
        <Image src={props.imagePath} fill={true} alt={props.alt} />
      </Link>
    </S.ImageLinkContainer>
  )
}
