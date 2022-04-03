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
      dispatch(user(response.data));
    });
  };
};