import { useState } from "react";
import Modal from "react-modal";

//services
import { useAppSelector } from "../../../services/hooks/useStore";

//common components
import ProductModal from "../../common/ProductModal";

//types
import { ProductProps } from "../../../services/redux/features/Products";

//styles
import { Container, GridProducts } from "./styles";
import Header from "../../common/Header";

Modal.setAppElement("#root");

const Home = () => {
  const products: ProductProps[] = useAppSelector(
    (state) => state.products.value
  );

  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [product, setProduct] = useState<ProductProps>();

  const handleEditProduct = (selectedProduct: ProductProps) => {
    setProduct(selectedProduct);
    handleOpenProductModal();
  };

  const handleOpenProductModal = () => {
    setIsProductModalOpen(true);
  };

  const handleCloseProductModal = () => {
    setIsProductModalOpen(false);
  };

  return (
    <>
      <Header />
      <Container>
        <GridProducts>
          {products.map((product, index) => (
            <div
              className="product"
              key={index}
              onClick={() => handleEditProduct(product)}
            >
              <h4>{product.name}</h4>
              <span>{product.description}</span>
              <img src={product.img} alt={"fruit img" + product.name} />
            </div>
          ))}
        </GridProducts>
        <ProductModal
          isOpen={isProductModalOpen}
          onRequestClose={handleCloseProductModal}
          product={product}
        />
      </Container>
    </>
  );
};

export default Home;
