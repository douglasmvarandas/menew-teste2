import { FormSignin } from "../../components/formSignin";
import { FormContainer, ImgContainer, LoginContainer } from "./style";
import signin from "../../assets/signin.svg"
import { motion } from "framer-motion";

export const Signin = () => {
  return (
    <>
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <LoginContainer>
          <ImgContainer>
            <img src={signin} alt="login" />
          </ImgContainer>
          <FormContainer>
            <FormSignin />
          </FormContainer>
        </LoginContainer>
      </motion.div>
    </>
  )
}