import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../components/card";
import { FormProductUpdate } from "../../components/formProductsUpdate";
import { Header } from "../../components/header";
import { allProductsThunk, ProductProps } from "../../store/product/thunk";
import { ProductContainer, ProductsBox, SearchBox } from "./style";
import { ProductCardProps } from "./types";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
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
            filtered.map((product, index) => (
              <Card product={product} setModal={setOpenModal} key={index}/>
            )) :
            productList.map((product, index) => (
              <Card product={product} setModal={setOpenModal} key={index}/>
            ))
            }
          </ProductsBox>
        </ProductContainer>
      </motion.div>
    </>
  )
}