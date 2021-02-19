import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser } from 'react-icons/fi';
import { HiOutlineIdentification } from 'react-icons/hi';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import Button from '../../components/Button';
import Input from '../../components/Inputs/InputForm';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';
import { CardLogin, Container } from '../Login/styles';
import { AnimationContainer } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),
  cpf: Yup.string()
    .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'Formato inválido')
    .required('CPF obrigatório')
});

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        await schema.validate(data, {
          abortEarly: false
        });

        // await api.post('/users', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer seu login!'
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente.'
        });
      }
    },
    [addToast, history]
  );

  return (
    <Container>
      <AnimationContainer>
        <CardLogin>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="cpf"
              icon={HiOutlineIdentification}
              type="text"
              placeholder="CPF"
              // mask="999.999.999-99"
            />

            <Button type="submit">Cadastrar</Button>
            <Link to="/">
              <Button type="submit" secundary>
                <FiArrowLeft />
                Voltar para login
              </Button>
            </Link>
          </Form>
        </CardLogin>
      </AnimationContainer>
    </Container>
  );
};

export default SignUp;
