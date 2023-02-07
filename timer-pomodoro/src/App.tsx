import { ThemeProvider } from 'styled-components'
import { Button } from "./components/button/Button";
import { defaultTheme } from './styles/defaultTheme';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button content="Enviar" varient="primary" />
      <Button content="Enviar" varient="secondary" />
      <Button content="Enviar" varient="danger" />
      <Button content="Enviar" varient="success" />
      <Button content="Enviar" />
    </ThemeProvider>
  )
}