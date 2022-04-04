import { useEffect, useState } from "react"
import { Mobile } from "./mobile"
import { Nav } from "./style"

export const Header = () => {
  const [user, setUser] = useState("")

  useEffect(() => {
    setUser(localStorage.getItem("user") || "")
  },[user])

  return (
    <>
      <Nav>
        <div>
          Olá, <span>{user}</span>
        </div>
        <Mobile />
      </Nav>
    </>
  )
}