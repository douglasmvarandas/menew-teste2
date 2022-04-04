import { CardsContainer } from "./style"
import { CardProps } from "./types"

export const Card = ({product}: CardProps) => {

  return (
    <>
      <CardsContainer>
        <span>{product.image}</span>
        <span>{product.name}</span>
        <span>{product.description}</span>
      </CardsContainer>
    </>
  )
}