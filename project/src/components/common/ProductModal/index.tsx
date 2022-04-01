import { useEffect, useState } from "react";
import Modal from "react-modal";

//services
import { useAppDispatch } from "../../../services/hooks/useStore";
import { updateProduct } from "../../../services/redux/features/Products";
import { ProductProps } from "../../../services/redux/features/Products";

//styles
import closeImg from "../../../assets/close.svg";
import { Container, Wrapper } from "./styles";

type ProductModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  product: ProductProps | undefined;
};

const ProductModal = ({
  isOpen,
  onRequestClose,
  product,
}: ProductModalProps) => {
  const dispatch = useAppDispatch();
  const [description, setDescription] = useState("");

  const updateDescriptionProduct = () => {
    dispatch(updateProduct({ ...product, description: description }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateDescriptionProduct();
    onRequestClose();
  };

  useEffect(() => {
    if (product) setDescription(product.description);
  }, [product]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container>
        <div className="content">
          <div className="product">
            <h4>{product?.name}</h4>
            <span>{product?.description}</span>
            <img src={product?.img} alt={"fruit img" + product?.name} />
          </div>
          <form onSubmit={handleSubmit}>
            <Wrapper>
              <label>
                Edit description
                <textarea
                  className="input-textarea"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
            </Wrapper>
            <button className="submit-update-product" type="submit">
              Save changes
            </button>
          </form>
        </div>
      </Container>
    </Modal>
  );
};

export default ProductModal;
