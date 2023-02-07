import { ButtonContainer, buttonVarient } from "./Button.styles"

interface buttonProps {
  varient?: buttonVarient,
  content: string
}

export function Button({ varient = 'primary', content }: buttonProps) {
  return <ButtonContainer varient={varient}>{content}</ButtonContainer>
}