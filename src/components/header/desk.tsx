import { Link } from "react-router-dom"
import { MobileProps, Ul } from "./style"


export const Desk = ({open}: MobileProps) => {

  return (
    <>
      <Ul open={open}>
          <li><Link to="/dashboard">Produtos</Link></li>
          <li><Link to="#">Sobre</Link></li>
          <li><Link to="/">Sair</Link></li>
      </Ul>
    </>
  )
}