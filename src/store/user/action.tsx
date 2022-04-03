import { USER, FILTER_USER } from "./actionType";


export const user = (user: any) => ({
  type: USER,
  payload: { user },
});

export const filter = (user: any) => ({
  type: FILTER_USER,
  payload: { user }
})