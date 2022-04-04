import { list, oneProduct, product } from "./action";
import { Dispatch } from 'redux'
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

export const productUpdateThunk = (id: string, data: ThunkProductProps) => {
  return (dispatch: Dispatch) => {
    api.get(`/products/${id}`, data).then(response => {
      dispatch(oneProduct(response.data))
    })
  }
}