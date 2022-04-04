import {SELECTED_ID} from "./actionType"

export const selected_id = (id: number) => ({
  type: SELECTED_ID,
  payload: { id },
});