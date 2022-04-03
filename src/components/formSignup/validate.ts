import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("Email inválido").required("Campo obrigatório"),
  cpf: yup.string().required("Campo obrigatório"),
 
});