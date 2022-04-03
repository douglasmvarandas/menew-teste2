import { FormSignin } from "../../components/formSignin";
import { FormContainer, ImgContainer, LoginContainer } from "./style";
import signin from "../../assets/signin.svg"

export const Signin = () => {
  return (
    <>
      <LoginContainer>
        <ImgContainer>
          <img src={signin} alt="login" />
        </ImgContainer>
        <FormContainer>
          <FormSignin />
        </FormContainer>
      </LoginContainer>
    </>
  )
}