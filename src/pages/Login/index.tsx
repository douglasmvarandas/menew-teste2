import { useFormik } from 'formik';
import React, { useContext, useState } from 'react';
import { FaLock, FaLockOpen } from 'react-icons/fa';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Spinner } from '../../components/Spinner/styles';
import AuthContext from '../../contexts/auth';
import { Container, Transition, Wrapper } from './styles';

const Login: React.FC = () => {
    const {signIn} = useContext(AuthContext);
    const [type, setType] = useState('password')
    
    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      onSubmit: async values => {
        const user = {
          email:values.email, password:values.password
        }
        try {
          signIn(user)
          // notifySuccess('Especialidade cadastrada com sucesso!');
          formik.setSubmitting(false);
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
  
        if (!(values.password)) {
          errors.password = '*Required';
        }
  
        return errors;
      },
    });

 return (
   <Wrapper>
     <Transition>
     <Container>
       <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
      <Input name='email' type='email' value={formik.values.email} placeholder='EMAIL' onChange={formik.handleChange} error={formik.errors.email}/>
      <Input name='password' value={formik.values.password} placeholder='SENHA' type={type} onChange={formik.handleChange} error={formik.errors.password}>
        {type==='text'? <FaLockOpen onClick={()=>setType('password')} />: (
          <FaLock onClick={()=>{setType('text')}}/>
        )}
      </Input>
      <Button className='btnDanger' color='btnDefault' disabled={!(formik.isValid && formik.dirty && !formik.isSubmitting)}>
        {formik.isSubmitting ? <Spinner /> : 'Login'}
      </Button>
      </form>
     </Container>
     </Transition>

   </Wrapper>
 );
};

export default Login;