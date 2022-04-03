import { signin } from "./action";
import {NavigateFunction} from "react-router-dom"
import api from "../../services/api";
import { filterUserThunks, userProps } from "../user/thunk";
import { useDispatch, useSelector } from "react-redux";

interface SigninThunkProps {
  data: {email: string, cpf: string}
  navigate: NavigateFunction
  
}

export const signinThunks = ({data, navigate}: SigninThunkProps) => {
  const redirect = useDispatch()
  const userVerify = useSelector<any>(state => state.signin) 
  const { email } = data
  return (dispatch: any) => {
    dispatch(filterUserThunks(email))
    if(userVerify){
      return alert('Usuario já existe')
    }
    redirect("/dashboard")
  };
};