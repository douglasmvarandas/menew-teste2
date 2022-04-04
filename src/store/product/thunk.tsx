import { list } from "./action";
import api from "../../services/api";

export interface ProductProps {
  name: string, description: string, image: string, id: number
}

export interface ThunkProductProps {
  data: ProductProps
}

export const allProductsThunk = () => {
  return (dispatch: any) => {
    api.get("/products").then(response => {
      dispatch(list(response.data))
    })
  }
}

export const productUpdateThunk = (id: number, data: ThunkProductProps) => {
  return (dispatch: any) => {
    api.patch(`/products/${id}`, data).then(response => {
      console.log(response)
    })
  }
}