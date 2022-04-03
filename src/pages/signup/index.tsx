import { FormContainer, ImgContainer, RegisterContainer } from "./style";
import { FormSignup } from "../../components/formSignup";
import signup from "../../assets/signup.svg"

export const Signup = () => {
  return (
    <>
      <RegisterContainer>
        <FormContainer>
          <FormSignup />
        </FormContainer>
        <ImgContainer>
          <img src={signup} alt="login" />
        </ImgContainer>
      </RegisterContainer>
    </>
  )
}