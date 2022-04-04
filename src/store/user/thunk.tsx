import { user } from "./action";
import { Dispatch } from 'redux'
import api from "../../services/api";

export interface userProps {
  name?: string, 
  email?: string, 
  cpf?: string
}

export const filterUserThunks = (email?: string ) => {
  return (dispatch: Dispatch) => {
    api.get(`/user?email=${email}`).then((response) => {
      localStorage.setItem("user", response.data[0]['name'])
      console.log(response.data)
      dispatch(user(response.data));
    });
  };
};