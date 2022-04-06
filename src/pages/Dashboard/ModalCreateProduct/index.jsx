import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { Container } from './styles';

import ButtonComponent from '../../../components/Button';
import InputComponent from '../../../components/Input';

import { initial_state } from '../../../utils/constants';
import { storage } from '../../../firebase/firebase';
import { addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const ModalCreateProduct = (props) => {
    const { getProducts, productsCollectionRef } = props;

    const [open, setOpen] = useState(false);
    const [newProduct, setNewProduct] = useState(initial_state);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const createProduct = async () => {
        try {
            const imageRef = ref(storage, `images/${newProduct.image.name}`);
            const uploadTask = await uploadBytes(imageRef, newProduct.image);
            await getDownloadURL(uploadTask.ref).then((downloadURL) => {
                addDoc(productsCollectionRef, { ...newProduct, image: downloadURL });
            });
            await getProducts();
            handleClose();
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
            <ButtonComponent
                content='CADASTRAR NOVO PRODUTO'
                color='neutral'
                fullWidth={true}
                onClick={handleOpen}
            />
            <Modal
                open={open}
                onClose={handleClose}
                style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}
            >
                <Container>
                    <div className="modal-title">
                        <h1>Cadastrar Novo Produto</h1>
                    </div>

                    <form>
                        <InputComponent
                            required={true}
                            fullWidth={true}
                            color="secondary"
                            label="Nome do Produto"
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        />

                        <InputComponent
                            required={false}
                            fullWidth={true}
                            color="secondary"
                            label="Descrição do Produto"
                            value={newProduct.description}
                            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                        />

                        <InputComponent
                            fullWidth={true}
                            color="secondary"
                            type="file"
                            accept="image/*"
                            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.files[0] })}
                        />

                    </form>


                    <div className="modal-footer">
                        <ButtonComponent
                            content='Cadastrar'
                            color='save'
                            onClick={createProduct}
                            fullWidth={true}
                        />

                        <ButtonComponent
                            content='Cancelar'
                            color='cancel'
                            onClick={handleClose}
                            fullWidth={true}
                        />
                    </div>
                </Container>

            </Modal>
        </>

    );
}

export default ModalCreateProduct;