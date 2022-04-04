import { useDispatch, useSelector } from "react-redux"
import { Button } from "../button"
import { BoxInputs, FormComponentRegister } from "./style"
import { MdOutlineClose } from "react-icons/md";
import { FormProps, ProductIdProps } from "./types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productUpdateThunk } from "../../store/product/thunk";
import { schema } from "./validate";


export const FormProductUpdate = ({modal, setModal}: FormProps) => {
  const selectId = useSelector((state: ProductIdProps) => state.productId)
  const dispatch = useDispatch()

  const {handleSubmit, reset, register } = useForm({resolver: yupResolver(schema),});

  const onSubmitData = (data: any) => {
    dispatch(productUpdateThunk(selectId, data))
    reset()
    setModal(false)
  }

  const handleModal = () => {
    if (modal){
      setModal(true)
    }
    setModal(false)
  }

  return (
    <>
      <FormComponentRegister onSubmit={handleSubmit(onSubmitData)} >
        <div>
          <h3>Atualizar Produto</h3>
          <MdOutlineClose onClick={handleModal}/>
        </div>
        <BoxInputs>
        <input
          type="text"
          placeholder="Nome"
          {...register("name", { required: false })}
        />
        <input
          type="text"
          placeholder="Descrição"
          {...register("description", { required: false })}
        />
        </BoxInputs>
        <Button type="submit" name="Enviar">
          Enviar
        </Button>
      </FormComponentRegister>
    </>
  )
}