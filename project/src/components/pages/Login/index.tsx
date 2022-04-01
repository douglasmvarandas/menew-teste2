import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

//services
import { UserContext, UserLogin } from "../../../services/contexts";

//common components
import TitledInput from "../../common/TitledInput";
import SignUpModal from "../../common/SignUpModal";

//styles
import { Container, Content, Wrapper } from "./styles";

Modal.setAppElement("#root");

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const initialState = () => ({ email: "", password: "" });
  const [fields, setFields] = useState<UserLogin>(initialState);

  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  function handleOpenSignUpModal() {
    setIsSignUpModalOpen(true);
  }

  function handleCloseSignUpModal() {
    setIsSignUpModalOpen(false);
  }

  const setLogin = async () => {
    const authenticated = login({ ...fields });
    if (authenticated) navigate("/");
  };

  const handleSubmitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLogin();
  };

  return (
    <Container>
      <Content>
        <main>
          <h1>Login</h1>
          <form onSubmit={handleSubmitLogin}>
            <Wrapper>
              <TitledInput
                value={fields.email}
                changeValue={(value) => setFields({ ...fields, email: value })}
                title="Email"
                placeholder="morais@gmail.com.br"
                type="email"
              />
              <TitledInput
                value={fields.password}
                changeValue={(value) =>
                  setFields({ ...fields, password: value })
                }
                title="Senha"
                placeholder="••••••••••••"
                type="password"
                titleButton="Sign in"
                typeButton={"submit"}
              />
            </Wrapper>
            <button
              type="button"
              className="button-signUp"
              onClick={handleOpenSignUpModal}
            >
              Sign up
            </button>
          </form>
        </main>
      </Content>
      <SignUpModal
        isOpen={isSignUpModalOpen}
        onRequestClose={handleCloseSignUpModal}
      />
    </Container>
  );
};
export default Login;
