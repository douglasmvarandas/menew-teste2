import { useDispatch, useSelector } from "react-redux"
import { filterId } from "../../store/states/thunk"
import { Button } from "../button"
import { CardsContainer } from "./style"
import { CardProps } from "./types"

export const Card = ({product, setModal, key}: CardProps) => {
  const dispatch = useDispatch()

  const handleUpdate = (id: number) => {
    dispatch(filterId(id))
    setModal(true)
  }

  return (
    <>
      <CardsContainer key={key}>
        <img src={product.image} alt='product image' /> 
        <span>{product.name}</span>
        <span>{product.description}</span>
        <Button name="Atualizar" callback={() => handleUpdate(product.id)}></Button>
      </CardsContainer>
    </>
  )
}