import { Button } from "../button"
import { CardsContainer } from "./style"
import { CardProps } from "./types"

export const Card = ({product}: CardProps) => {

  return (
    <>
      <CardsContainer>
        <img src={product.image} alt='product image' /> 
        <span>{product.name}</span>
        <span>{product.description}</span>
        <Button name="Alterar"></Button>
      </CardsContainer>
    </>
  )
}