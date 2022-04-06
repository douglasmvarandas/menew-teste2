import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { Container } from './styles';

import ButtonComponent from '../../../components/Button';
import InputComponent from '../../../components/Input';

import { initial_state } from '../../../utils/constants';
import { db, storage } from '../../../firebase/firebase';
import { updateDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const ModalEditProduct = (props) => {
    const { product, getProducts } = props;

    const [open, setOpen] = useState(false);
    const [productEdit, setProductEdit] = useState({
        ...initial_state, name: product.name, description: product.description, image: product.image
    });
    console.log(productEdit);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const uptadeProduct = async () => {
        try {
            const imageRef = ref(storage, `images/${productEdit.image.name}`);
            const uploadTask = await uploadBytes(imageRef, productEdit.image);
            await getDownloadURL(uploadTask.ref).then((downloadURL) => {
                const productDoc = doc(db, 'product', product.id)
                updateDoc(productDoc, { ...productEdit, image: downloadURL || product.image });
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
                content='EDITAR PRODUTO'
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
                        <h1>Editar Produto - {product.name}</h1>
                    </div>


                    <form>
                        <InputComponent
                            fullWidth={true}
                            color="secondary"
                            label="Nome do Produto"
                            value={productEdit.name}
                            onChange={(e) => setProductEdit({ ...productEdit, name: e.target.value })}
                        />

                        <InputComponent
                            required={false}
                            fullWidth={true}
                            color="secondary"
                            label="Descrição do Produto"
                            value={productEdit.description}
                            onChange={(e) => setProductEdit({ ...productEdit, description: e.target.value })}
                        />

                        <InputComponent
                            fullWidth={true}
                            color="secondary"
                            type="file"
                            accept="image/*"
                            onChange={(e) => setProductEdit({ ...productEdit, image: e.target.files[0] })}
                        />

                    </form>


                    <div className="modal-footer">
                        <ButtonComponent
                            content='SALVAR'
                            color='save'
                            fullWidth={true}
                            onClick={uptadeProduct}
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

export default ModalEditProduct;