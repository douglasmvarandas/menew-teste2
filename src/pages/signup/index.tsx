import { FormContainer, ImgContainer, RegisterContainer } from "./style";
import { FormSignup } from "../../components/formSignup";
import signup from "../../assets/signup.svg"
import { motion } from "framer-motion";

export const Signup = () => {
  return (
    <>
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <RegisterContainer>
          <FormContainer>
            <FormSignup />
          </FormContainer>
          <ImgContainer>
            <img src={signup} alt="login" />
          </ImgContainer>
        </RegisterContainer>
      </motion.div>
    </>
  )
}