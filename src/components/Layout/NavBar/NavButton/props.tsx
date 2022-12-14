import { Url } from 'url'

export interface NavButtonProps {
  href: Url | string
  navBarCurrentIndex: number
  navButtonIndex: number
  setIndex: (index: number) => void
}
