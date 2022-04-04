import { MobileStyle } from "./style"
import { useState } from "react"
import { Desk } from "./desk"



export const Mobile = () => {
  const [open, setOpen] = useState(false) 

  return (
    <>
      <MobileStyle open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </MobileStyle>
      <Desk open={open} />
    </>
  )
}