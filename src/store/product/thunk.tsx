import { list, oneProduct, product } from "./action";
import { Dispatch } from 'redux'
import api from "../../services/api";

export interface ProductProps {
  product: {name?: string, description?: string, image?: string}
}

export interface ThunkProductProps {
  data: ProductProps
}

export const productThunks = ({data}: ThunkProductProps) => {
  return (dispatch: Dispatch) => {
    api.post("/products", data).then((response) => {
      dispatch(product(response.data));
    });
  };
};

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