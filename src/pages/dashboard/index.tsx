import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../components/card";
import { FormProductUpdate } from "../../components/formProductsUpdate";
import { Header } from "../../components/header";
import { allProductsThunk, ProductProps } from "../../store/product/thunk";
import { ProductContainer, ProductsBox, SearchBox } from "./style";
import { ProductCardProps } from "./types";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state: ProductCardProps) => state.product)
  const [openModal, setOpenModal] = useState(false)
  const [filtered, setFiltered] = useState<ProductProps[]>([]);
  const [search, setSearch] = useState("");
 
  useEffect(() => {
    dispatch(allProductsThunk())
    setFiltered(
      productList.filter((item) => {
        const regex = new RegExp(search.toLowerCase(), "g");
        return (
          item.name?.toLowerCase().match(regex) ||
          item.description?.toLowerCase().match(regex)
        );
      })
    );
  },[search])

  return (
    <>
      <ProductContainer>
        <Header/>
        <SearchBox>
          <input
            type="text"
            placeholder="Pesquise por nome ou descrição"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchBox>
        {openModal ? <FormProductUpdate modal={openModal} setModal={setOpenModal} /> : <></>}
        <ProductsBox>
          {filtered.length > 0 ?
          filtered.map((product, key) => (
            <Card product={product} setModal={setOpenModal} key={product.id}/>
          )) :
          productList.map(product => (
            <Card product={product} setModal={setOpenModal} key={product.id}/>
          ))
          }
        </ProductsBox>
      </ProductContainer>
    </>
  )
}