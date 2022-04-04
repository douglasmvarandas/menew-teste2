import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../components/card";
import { Header } from "../../components/header";
import { allProductsThunk, ProductProps } from "../../store/product/thunk";
import { ProductContainer, ProductsBox } from "./style";
import { ProductCardProps } from "./types";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state: ProductCardProps) => state.product)
 

  useEffect(() => {
    dispatch(allProductsThunk())
  },[])

  return (
    <>
    <Header/>
      <ProductContainer>
        <ProductsBox>
          {productList.map(product => (
            <Card product={product}/>
          ))}
        </ProductsBox>
      </ProductContainer>
    </>
  )
}