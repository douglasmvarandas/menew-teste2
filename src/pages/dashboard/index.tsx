import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
      <h1>Dash</h1>
    </>
  )
}