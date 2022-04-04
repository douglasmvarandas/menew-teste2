import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { Container } from './styles';

import ButtonComponent from '../../../components/Button';
import InputComponent from '../../../components/Input';


const ModalEditProduct = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const submit = () => {
        handleClose();
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
                        <h1>Editar Produto - DETERGENTE</h1>
                    </div>


                    <form onSubmit={submit}>
                        <InputComponent
                            required={true}
                            fullWidth={true}
                            color="primary"
                            label="Nome do Produto"
                        />

                        <InputComponent
                            required={false}
                            fullWidth={true}
                            color="primary"
                            label="Descrição do Produto"
                        />

                        <InputComponent
                            fullWidth={true}
                            color="primary"
                            type="file"
                            accept="image/*"
                        />

                    </form>


                    <div className="modal-footer">
                        <ButtonComponent
                            content='SALVAR'
                            color='save'
                            type='submit'
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

export default ModalEditProduct;