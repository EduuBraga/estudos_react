import { ThemeProvider } from 'styled-components'
import { Button } from "./components/button/Button";

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/defaultTheme';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button>Enviar</Button>
      <Button>Enviar</Button>
      <Button>Enviar</Button>
      <Button>Enviar</Button>
      <Button>Enviar</Button>

      <GlobalStyle />
    </ThemeProvider>
  )
}