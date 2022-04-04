import { useState } from "react"
import { User } from "../formSignin/type"
import { Mobile } from "./mobile"
import { Nav } from "./style"

export const Header = () => {
  const [user, setUser] = useState(localStorage.getItem("user"))

  return (
    <>
      <Nav>
        <div>
          Olá {user}
        </div>
        <Mobile />
      </Nav>
    </>
  )
}