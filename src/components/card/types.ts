import { Dispatch, SetStateAction } from "react";
import { ProductProps } from "../../store/product/thunk";

export interface CardProps {
  product: ProductProps
  setModal: Dispatch<SetStateAction<boolean>>
  key: number
}