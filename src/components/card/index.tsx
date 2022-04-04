import { useSelector } from "react-redux"
import { filterId } from "../../store/states/thunk"
import { Button } from "../button"
import { CardsContainer } from "./style"
import { CardProps } from "./types"

export const Card = ({product, setModal}: CardProps) => {
  

  const handleUpdate = (id: number) => {
    setModal(true)
    filterId(id)
  }

  return (
    <>
      <CardsContainer>
        <img src={product.image} alt='product image' /> 
        <span>{product.name}</span>
        <span>{product.description}</span>
        <Button name="Alterar" callback={() => handleUpdate(product.id)}></Button>
      </CardsContainer>
    </>
  )
}