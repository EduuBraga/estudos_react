import styled, { css } from 'styled-components'

export type buttonVarient = 'primary' | 'secondary' | 'success' | 'danger'

interface ButtonContainerProps {
  varient: buttonVarient
}

const buttonVarients = {
  primary: '#00ffbd',
  secondary: '#7799ee',
  success: 'green',
  danger: 'red'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  ${({ varient }) => css`
      background-color: ${buttonVarients[varient]};
    `
  }
`