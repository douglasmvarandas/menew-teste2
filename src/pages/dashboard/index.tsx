import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../components/card";
import { FormProductUpdate } from "../../components/formProductsUpdate";
import { Header } from "../../components/header";
import { allProductsThunk } from "../../store/product/thunk";
import { ProductContainer, ProductsBox } from "./style";
import { ProductCardProps } from "./types";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state: ProductCardProps) => state.product)
  const [openModal, setOpenModal] = useState(false)
 
  useEffect(() => {
    dispatch(allProductsThunk())
  },[])

  return (
    <>
      <ProductContainer>
        <Header/>
        {openModal ? <FormProductUpdate modal={openModal} setModal={setOpenModal} /> : <></>}
        <ProductsBox>
          {productList.map(product => (
            <Card product={product} setModal={setOpenModal} key={product.id}/>
          ))}
        </ProductsBox>
      </ProductContainer>
    </>
  )
}