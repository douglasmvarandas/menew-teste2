import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../../components/Navbar/index';

import { Container } from './styles';
import Logo from '../../assets/menew_logo.png';

import ModalCreateProduct from './ModalCreateProduct/index';
import ModalEditProduct from './ModalEditProduct/index';

import { db } from '../../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

const Dashboard = () => {
    const user = useSelector(state => state.user)

    const [products, setProducts] = useState([]);
    const [userLoggedIn, setUserLoggedIn] = useState([])
    const [searchProducts, setSearchProducts] = useState('')
    const productsCollectionRef = collection(db, "product")
    const userCollectionRef = collection(db, "users")

    const getProducts = async () => {
        try {
            const data = await getDocs(productsCollectionRef)
            const allProducts = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            const filteredProducts = allProducts.filter(product => product.name.toLowerCase().includes(searchProducts.toLowerCase()))
            setProducts(filteredProducts)
        } catch (error) {
            console.log(error)
        }
    }

    const getUsers = async () => {
        try {
            const data = await getDocs(userCollectionRef)
            const usersList = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            setUserLoggedIn(usersList.filter(log => log.uid === user.uid))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { getUsers() }, [])
    useEffect(() => { getProducts() }, [searchProducts])

    return (
        <>
            <NavBar setSearchProducts={setSearchProducts} />
            <Container>
                <div className="container">
                    <div className="container-header">
                        <h1>Olá, {userLoggedIn[0]?.name}. - {userLoggedIn[0]?.cpf}</h1>
                        <span>
                            Total de produtos cadastrados: {products?.length}
                        </span>
                        <ModalCreateProduct getProducts={getProducts} productsCollectionRef={productsCollectionRef} />
                    </div>
                    {products.length > 0 ?
                        products.map(product => (
                            <div key={product.id} className="container-body">
                                <img src={product.image ? product.image : Logo} alt={`Imagem do Produto ${product.name}`} />
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <ModalEditProduct product={product} getProducts={getProducts} />
                            </div>
                        ))
                        :
                        <h1>Não há Produtos Cadastrados</h1>
                    }
                </div>
            </Container>
        </>
    );
}

export default Dashboard;