import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./validate";
import { MdOutlineClose } from "react-icons/md";
import { BoxInputs, FormComponentRegister } from "./style"
import { Button } from "../button"
import { FormProps, ProductIdProps } from "./types";
import { ProductProps, productUpdateThunk } from "../../store/product/thunk";
import api from "../../services/api";


export const FormProductUpdate = ({modal, setModal}: FormProps) => {
  const selectId = useSelector((state: ProductIdProps) => state.productId)
  const [product, setProduct] = useState<ProductProps>()
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

  useEffect(() => {
    api.patch(`/products/${selectId}`).then(response => {
      setProduct(response.data)
    })
  },[selectId])

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
          placeholder={product?.name}
          {...register("name", { required: false })}
        />
        <input
          type="text"
          placeholder={product?.description}
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