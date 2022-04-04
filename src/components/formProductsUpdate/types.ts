import { Dispatch, SetStateAction } from "react";

export interface FormProps {
  setModal: Dispatch<SetStateAction<boolean>>
  modal: boolean
}

export interface ProductIdProps {
  productId: number
}
