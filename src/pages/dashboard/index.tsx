import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../components/header";
import { allProductsThunk, ProductProps } from "../../store/product/thunk";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const productList = useSelector<any>(state => state.product)
 

  useEffect(() => {
    dispatch(allProductsThunk())
  },[])
  console.log(productList)
  return (
    <>
    <Header/>
      <h1>Dash</h1>
    </>
  )
}