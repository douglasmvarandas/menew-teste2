import { FooterSignin, FormComponentLogin } from "./style"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./validate";
import { Button } from "../../components/button"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signinThunks } from "../../store/signin/thunk"
import { Input } from "../input";

export const FormSignin = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitData = (data: any) => {
    dispatch(signinThunks(data));
    reset();
  };
  return (
    <>
      <FormComponentLogin onSubmit={handleSubmit(onSubmitData)}>
        <div>
          <h2>Bem vindo</h2>
          <p>Faça o login para continuar</p>
        </div>
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
        <Button type="submit" name="Entrar">
          Entrar
        </Button>
        <FooterSignin>
          <span>
            Ainda não tem uma conta? 
          </span>
          <Link to="/signup">Cadastre-se</Link>
        </FooterSignin>
      </FormComponentLogin>
    </>
  )
}