import { Input } from "../input";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validate";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { FooterSignup, FormUser } from "./style";
import { userProps } from "../../store/user/thunk"
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../button";
import api from "../../services/api";


export const FormSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
   
  });

  const onSubmitData = async (data: userProps) => {
    try{
      const user = await api.post("/user", data)
      console.log(user)
    }catch (err){
      console.log(err)
    }
    navigate("/")
  }

  return (
    <>
      <FormUser onSubmit={handleSubmit(onSubmitData)}>
        <div>
          <h2>Faça seu cadastro</h2>
        </div>
        <Input
          type="text"
          placeholder="Nome"
          name="name"
          register={register}
          error={errors.name?.message}
        />
        <Input
          type="text"
          placeholder="Email"
          name="email"
          register={register}
          error={errors.email?.message}
        />
        <Input
          type="text"
          placeholder="Cpf"
          name="cpf"
          register={register}
          error={errors.cpf?.message}
        />
        <Button type={'submit'} name="Cadastrar">
          Cadastrar
        </Button>
        <FooterSignup>
        <span>
          Já possui uma conta? 
        </span>
          <Link to="/">Entrar</Link>
        </FooterSignup>
      </FormUser>
    </>
  );
}