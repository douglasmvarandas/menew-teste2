import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef } from 'react';
import { FiLock, FiUser } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import LogoImg from '../../assets/icons/logo.png';
import Button from '../../components/Button';
import Input from '../../components/Inputs/InputForm';
import { Logo } from '../../components/Menu/styles';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';
import { AnimationContainer } from '../Register/styles';
import { CardLogin, Container } from './styles';

export interface LoginFormData {
  username: string;
  password: string;
  rememberMe: boolean;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: LoginFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string().required('Usuário obrigatório'),
          password: Yup.string().required('Senha obrigatória')
        });

        await schema.validate(data, {
          abortEarly: false
        });

        if (data.username === 'admin' && data.password === 'admin') {
          history.push('/home');
        } else {
          addToast({
            type: 'error',
            title: 'Credenciais inválidas!',
            description: 'Usuário: admin e Senha: admin'
          });
        }

        // await signIn({
        //   username: data.username,
        //   password: data.password,
        //   rememberMe: data.rememberMe
        // });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais.'
        });
      }
    },
    [signIn, addToast, history]
  );

  return (
    <Container>
      <AnimationContainer>
        <CardLogin>
          <Form ref={formRef} onSubmit={handleSubmit}>
            {/* <h1>Faça seu login</h1> */}
            <Logo src={LogoImg} alt="logo" />

            <Input name="username" icon={FiUser} placeholder="Usuário" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Button type="submit">Entrar</Button>
            <Link to="/register">
              <Button type="button" secundary>
                Cadastre-se
              </Button>
            </Link>
          </Form>
        </CardLogin>
      </AnimationContainer>
    </Container>
  );
};

export default Login;
