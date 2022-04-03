import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Campo obrigatório"),
  cpf: yup.string().min(11, "Deve possuir 11 digitos").max(11, "Deve possuir 11 digitos").required("Campo obrigatório"),
});