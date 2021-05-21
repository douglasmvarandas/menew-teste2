import React, { useContext } from 'react';
import { IoMdLogOut } from 'react-icons/io';
import Header from '../../components/Header';
import AuthContext from '../../contexts/auth';

const Home: React.FC = () => {
  const { user, signOut} = useContext(AuthContext);
  
  
 return (
   <Header>
    <p>Bem vindo: <strong>{user.email}</strong></p>
    <IoMdLogOut onClick={()=>signOut()}/>
   </Header>
 );
};

export default Home;