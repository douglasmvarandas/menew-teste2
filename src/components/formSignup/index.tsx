import { Input } from "../input";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validate";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { FormUser } from "./style";
import { userThunks, userProps } from "../../store/user/thunk"
import { Link } from "react-router-dom";
import { Button } from "../button";



export const FormSgnup = () => {
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
        <span>
          Já possui uma conta? <Link to="/">Cadastre-se</Link>
        </span>
      </FormUser>
    </>
  );
}