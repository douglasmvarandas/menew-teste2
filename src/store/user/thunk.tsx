import { user } from "./action";
import { Dispatch } from 'redux'
import api from "../../services/api";
import { useDispatch } from "react-redux";

export interface userProps {
  name?: string, 
  email?: string, 
  cpf?: string
}

export const userThunks = (data: userProps) => {
  const redirect = useDispatch()
  return (dispatch: Dispatch) => {
    api.post("/user", data).then((response) => {
      dispatch(user(response.data));
    });
    redirect("/")
  };
};

export const filterUserThunks = (email: string ) => {
  return (dispatch: Dispatch) => {
    api.post(`/user?email=${email}`).then((response) => {
      dispatch(user(response.data));
    });
  };
};