import styled from 'styled-components'

const Title = styled.h1`
  color: blue;
  font-size: 50px;
`

export default function Home() {
  const a = 'Whassup'
  return <Title>{a}</Title>
}
