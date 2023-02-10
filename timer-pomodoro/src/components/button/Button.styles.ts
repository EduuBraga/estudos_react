import styled, { css } from 'styled-components'

export const ButtonContainer = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 8px;
  border: 0;
  margin: 0.5rem;

  background-color: ${props => props.theme['green-500']};
  color: ${props => props.theme.white};
`