import { Input } from "../input";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validate";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { FooterSignup, FormUser } from "./style";
import { userThunks, userProps } from "../../store/user/thunk"
import { Link } from "react-router-dom";
import { Button } from "../button";



export const FormSignup = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitData = (data: userProps) => {
    dispatch(userThunks(data));
    reset();
  };

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
        <Button type="submit" name="Enviar">
          Enviar
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