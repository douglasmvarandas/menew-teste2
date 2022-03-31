import { useState, useContext } from "react";
import Modal from "react-modal";

//services
import { UserContext, UserProps } from "../../../services/contexts";

//common components
import TitledInput from "../TitledInput";

//styles
import closeImg from "../../../assets/close.svg";
import { Container, Wrapper } from "./styles";

type SignUpModal = {
  isOpen: boolean;
  onRequestClose: () => void;
};

const SignUpModal = ({ isOpen, onRequestClose }: SignUpModal) => {
  const { storeUsers } = useContext(UserContext);

  const initialState = {
    email: "",
    password: "",
    name: "",
    cpf: "",
  };
  const [fields, setFields] = useState<UserProps>(initialState);

  const cleanFields = () => {
    setFields(initialState);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    storeUsers({ ...fields });
    cleanFields();
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container>
        <form onSubmit={handleSubmit}>
          <Wrapper>
            <TitledInput
              value={fields.name}
              changeValue={(value) => setFields({ ...fields, name: value })}
              title="Name"
              placeholder="Morais"
              type="text"
            />
            <TitledInput
              value={fields.cpf}
              changeValue={(value) => setFields({ ...fields, cpf: value })}
              title="CPF"
              placeholder="XXX.XXX.XXX-XX"
              type="text"
            />
            <TitledInput
              value={fields.email}
              changeValue={(value) => setFields({ ...fields, email: value })}
              title="Email"
              placeholder="morais@gmail.com.br"
              type="email"
            />
            <TitledInput
              value={fields.password}
              changeValue={(value) => setFields({ ...fields, password: value })}
              title="Senha"
              placeholder="••••••"
              type="password"
            />
          </Wrapper>
          <button className="submit-user" type="submit">
            Create user
          </button>
        </form>
      </Container>
    </Modal>
  );
};

export default SignUpModal;
