import styled from 'styled-components'

export const Toolbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-bottom: 40px;
  border-bottom: 0.5px solid ${({ theme }) => theme.palette.divider}; ;
`
