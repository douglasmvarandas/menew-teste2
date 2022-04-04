import { signin } from "./action";
import { NavigateFunction } from "react-router-dom"
import { filterUserThunks } from "../user/thunk";

interface SigninThunkProps {
  data: {email: string, cpf: string}
  navigate: NavigateFunction
  
}

export const signinThunks = ({data, navigate}: SigninThunkProps) => {
  const { email } = data
  return (dispatch: any) => {
    dispatch(filterUserThunks(email))
    
  };
};