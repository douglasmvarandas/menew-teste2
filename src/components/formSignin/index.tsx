import { FooterSignin, FormComponentLogin } from "./style"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./validate";
import { Button } from "../../components/button"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../input";
import { filterUserThunks, userProps } from "../../store/user/thunk";
import { User } from "./type";

export const FormSignin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const user = useSelector((state: User) => state.user)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitData = (data: userProps) => {
    const {email, cpf} = data
    dispatch( filterUserThunks(email))
    if(user.length > 0 && user[0].cpf == cpf){
      navigate("/dashboard")
      reset()
    }
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