import styled from 'styled-components'

export const Panel = styled.aside`
  position: sticky;
  display: flex;
  flex-direction: column;

  width: 470px;
  height: 100vh;
  border-left: 0.5px solid ${({ theme }) => theme.palette.divider}; ;
`
