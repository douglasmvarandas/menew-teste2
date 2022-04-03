import { userProps } from "../../store/user/thunk";

interface UserSignin {
  email: string
  cpf: string
}

export interface User {
  user: UserSignin[]
}