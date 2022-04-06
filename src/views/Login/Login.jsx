import { useContext } from 'react';
import { Box, Container, Avatar, Typography, } from '@mui/material';
import { CustomInput as Input } from '../../components/TextField/Input';
import { CustomButton as Button} from '../../components/Button/Button';
import { useSnackbar  } from 'notistack';

// Icones 
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { appContext } from '../../main/Context'

const Login = () => {

    const {users} = useContext(appContext);
    const { enqueueSnackbar } = useSnackbar();

    function handleSubmit(e){
        e.preventDefault();

        let form = document.forms.login;
        let usuario = form.usuario.value;
        let senha = form.senha.value;

        const existeUsuario = users.find(item => {
            if(item.login === usuario && item.senha === senha) {
                return true;
            } else {
                return false;
            }
        })

        if (existeUsuario) {
            localStorage.setItem('@app-token',JSON.stringify(existeUsuario));
            window.location.reload();
        } else {
            console.log('não achou usuario');
            enqueueSnackbar('Login e Senha não conferem', {variant: 'error'})
        }
        
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box
            sx={{marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box component="form" name='login' onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <Input
                        required
                        id="usuario"
                        label="Usuário"
                        name="usuario"
                    />
                    <Input
                        required
                        name="senha"
                        label="Senha"
                        type="password"
                        id="senha"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Entrar
                    </Button>
                </Box>
                <Typography component="p" variant="p">
                    Login: admin, senha: facil
                </Typography>
            </Box>
        </Container>
    )
}

export default Login;