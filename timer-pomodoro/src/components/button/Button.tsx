import { ButtonContainer } from './Button.styles'

interface buttonProps {
  children: string
}

export function Button({ children }: buttonProps) {
  return <ButtonContainer>{children}</ButtonContainer>
}
