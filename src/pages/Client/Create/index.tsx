/* eslint-disable jsx-a11y/alt-text */
import { useFormik } from 'formik';
import React from 'react';
import { useHistory } from 'react-router';
import BreadCrumb from '../../../components/BreadCrumb';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { Spinner } from '../../../components/Spinner/styles';
import SubHeader from '../../../components/SubHeader';
import api from '../../../services/api';
import { CardWrapper, Container } from './styles';

const Create: React.FC = () => {
  const nav = useHistory();

      
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      document: '',
    },
    onSubmit: async values => {
      const data = {
        name: values.name,
        email:values.email, 
        document:values.document
      }
      try {
        formik.setSubmitting(true);
        await api.post('/clients', data)
        // notifySuccess('Especialidade cadastrada com sucesso!');
        formik.setSubmitting(false);
        nav.push('/app/client')
      } catch (error) {
        const message  = 'Oops algo deu errado';
        // notifyError(message);
        console.log(message);
        
        formik.setSubmitting(false);
      }
    },
    validate: values => {
      
      const errors: any = {};

      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = '*Email Invalid';
      }

      if (!(values.name)) {
        errors.password = '*Required';
      }

      if (!(values.document)) {
        errors.document = '*Required';
      }

      return errors;
    },
  });
  
 return (
   <>
    <SubHeader>
    <BreadCrumb
          items={[
            { text: 'Home', to: '/app' }
          ]}
          itemActual={{
            text: 'Cadastro',
            to: '/app/client/new',
          }}
          isNext
        />
    </SubHeader>
   <Container>

      <CardWrapper>

        <h1>CADASTRAR CLIENTE</h1>
        <form onSubmit={formik.handleSubmit}>
        <Input name='name' value={formik.values.name} placeholder='NOME' onChange={formik.handleChange} error={formik.errors.name}/>
        <Input name='email' type='email' value={formik.values.email} placeholder='EMAIL' onChange={formik.handleChange} error={formik.errors.email}/>
        <Input name='document' value={formik.values.document} placeholder='CPF' onChange={formik.handleChange} error={formik.errors.document}/>
        <Button className='btnDanger' color='btnDefault' disabled={!(formik.isValid && formik.dirty && !formik.isSubmitting)}>
          {formik.isSubmitting ? <Spinner /> : 'Cadastrar'}
        </Button>
        </form>
      </CardWrapper>
   </Container>
   </>
   
 );
};

export default Create;