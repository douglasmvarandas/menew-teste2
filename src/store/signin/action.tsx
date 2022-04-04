import { SIGNIN } from "./actionType";

interface SigninProps{
  user: string
}

export const signin = (user: SigninProps) => ({
  type: SIGNIN,
  payload: { user },
});