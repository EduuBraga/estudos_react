import { Button } from "./components/button/Button";

export function App() {
  return (
    <div>
      <Button content="Enviar"   varient="primary"></Button>
      <Button content="Enviar"  varient="secondary"></Button>
      <Button content="Enviar"  varient="danger"></Button>
      <Button content="Enviar"  varient="success"></Button>
      <Button content="Enviar" ></Button>
    </div>
  )
}