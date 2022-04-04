import { useSelector } from "react-redux"
import { Button } from "../button"
import { BoxInputs, FormComponentRegister } from "./style"
import { MdOutlineClose } from "react-icons/md";
import { FormProps } from "./types";


export const FormProductUpdate = ({modal, setModal}: FormProps) => {
  const product = useSelector((state: any) => state.product)
  console.log(product)

  const handleModal = () => {
    if (modal){
      setModal(true)
    }
    setModal(false)
  }

  return (
    <>
      <FormComponentRegister>
        <div>
          <h3>Atualizar Produto</h3>
          <MdOutlineClose onClick={handleModal}/>
        </div>
        <BoxInputs>
        <input
          type="text"
          placeholder="Nome"
          name="email"
        />
        <input
          type="text"
          placeholder="Descrição"
          name="email"
        />
        </BoxInputs>
        <Button type="submit" name="Enviar">
          Enviar
        </Button>
      </FormComponentRegister>
    </>
  )
}