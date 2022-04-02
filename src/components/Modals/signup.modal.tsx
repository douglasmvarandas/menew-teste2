import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';

import GradientButton from '../GradientButton';

import { SIGNUP_MODAL_TITLE, SUCESS_SIGNUP_MESSAGE, ERROR_SIGNUP_MESSAGE } from '../../constants/strings.constants'
import Toast, { ToastInitialState } from '../Toast'

import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../reducers/slices/user.slice';
import { iUser } from '../../db'

interface ModalProps {
    open: boolean;
    toggle: VoidFunction;
}

const userDataInitialState: iUser = {
    name: 'Menew Admin',
    email: 'menew@admin.com',
    cpf: '987.654.321-00',
    password: '123'
}

export default function ({ open, toggle }: ModalProps) {
    const [toastConfig, setToastConfig] = useState(ToastInitialState)
    const [openToast, setOpenToast] = useState(false)

    const { error, success } = useSelector((state: any) => state.user)
    const dispatch = useDispatch()

    const handleCloseToast = () => setOpenToast(false)
    const handleOpenToast = () => setOpenToast(true)

    const [userData, setUserData] = useState(userDataInitialState)

    const handleSignUp = () => dispatch(registerUser(userData))

    const handleUserData = ({ target }: any) => {
        const { name, value } = target
        setUserData((prev) => ({ ...prev, [name]: value }))
    }

    useEffect(() => {
        if (error) {
            setToastConfig((prev) => ({ ...prev, message: ERROR_SIGNUP_MESSAGE, type: 'error' }))
            return handleOpenToast()
        }

        if (success) {
            toggle()
            handleOpenToast()
            return setToastConfig((prev) => ({ ...prev, message: SUCESS_SIGNUP_MESSAGE, type: 'success' }))
        }

    }, [error, success])

    return (
        <>
            <Toast open={openToast} handleClose={handleCloseToast} message={toastConfig.message} type={toastConfig.type} />

            <Dialog
                open={open}
                onClose={toggle}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{ mx: 1 }}>
                    {SIGNUP_MODAL_TITLE}
                </DialogTitle>
                <Box
                    noValidate
                    component="form"
                    autoComplete="off"
                    sx={{ '& > :not(style)': { my: 1 }, width: '90%', margin: '0 auto' }}
                >
                    <TextField
                        name="name"
                        label="Seu nome"
                        variant="filled"
                        required
                        fullWidth
                        value={userData.name}
                        onChange={handleUserData}
                    />
                    <TextField
                        name="email"
                        label="Seu email"
                        type="email"
                        variant="filled"
                        required
                        fullWidth
                        value={userData.email}
                        onChange={handleUserData}
                    />
                    <TextField
                        name="cpf"
                        label="Seu CPF"
                        variant="filled"
                        required
                        value={userData.cpf}
                        onChange={handleUserData}
                        fullWidth
                    />
                    <TextField
                        name="password"
                        label="Sua senha"
                        variant="filled"
                        type="password"
                        required
                        value={userData.password}
                        onChange={handleUserData}
                        fullWidth
                    />
                    <TextField
                        name="avatar"
                        label="URL do seu avatar (opcional)"
                        variant="filled"
                        type="url"
                        value={userData.avatar}
                        onChange={handleUserData}
                        fullWidth
                    />
                </Box>
                <DialogActions sx={{ mx: 2.5 }}>
                    <Button color="secondary" onClick={toggle}>Cancelar</Button>
                    <GradientButton onClick={handleSignUp} autoFocus>
                        Cadastrar
                    </GradientButton>
                </DialogActions>
            </Dialog>
        </>
    );
}