import { Header } from "../../components/header"
import { ContainerNotFound } from "./style"
import notfound from "../../assets/notfound.png"
import { motion } from "framer-motion";

export const NotFound = () => {

  return (
    <>
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Header />
        <ContainerNotFound>
          <h1>Página em construção</h1>
          <img src={notfound} alt="page not found"/>
        </ContainerNotFound>
      </motion.div>
    </>
  )
}