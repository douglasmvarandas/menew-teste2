import { list } from "./action";
import api from "../../services/api";
import { DataUpdateProps } from "../../components/formProductsUpdate/types";

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
  console.log(data)
  console.log(id)
  return (dispatch: any) => {
    api.patch(`/products/${id}`, data).then(response => {
      console.log(response)
    })
  }
}