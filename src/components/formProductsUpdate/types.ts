import { Dispatch, SetStateAction } from "react";
import { ThunkProductProps } from "../../store/product/thunk";

export interface FormProps {
  setModal: Dispatch<SetStateAction<boolean>>
  modal: boolean
}

export interface ProductIdProps {
  productId: number
}

export interface Lala {
  name?: string
  description?: string
}

export interface DataUpdateProps {
  data: Lala
}