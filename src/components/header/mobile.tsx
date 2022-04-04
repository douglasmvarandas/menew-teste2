import { MobileStyle } from "./style"
import { useState } from "react"
import { Options } from "./options"



export const Mobile = () => {
  const [open, setOpen] = useState(false) 

  return (
    <>
      <MobileStyle open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </MobileStyle>
      <Options open={open} />
    </>
  )
}