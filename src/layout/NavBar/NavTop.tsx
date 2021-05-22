/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { FaSignOutAlt, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/auth";
import { formatInitialName } from "../../helpers/formaters";
import { Brand, Container, Nav, NavRight, Navtop } from "./styles";


const NavTop: React.FC = () =>{
  const { user, signOut} = useContext(AuthContext);

  const name = formatInitialName(user.name)

    return (
        <Container>
        
        <Navtop>
            <Brand ><Link to="/app">Bookstore</Link></Brand>
            <Nav>
                <Link to="/app">Produtos</Link>
                <Link to="/app/client/new"><FaUserPlus/></Link>
                <Link to="/app/client">Clientes</Link>
            </Nav>
            <NavRight>
                <p>{name}</p>
                <a><FaSignOutAlt onClick={()=>signOut()}/></a>
            </NavRight>
        </Navtop>
        </Container>

    );
}

export default NavTop;