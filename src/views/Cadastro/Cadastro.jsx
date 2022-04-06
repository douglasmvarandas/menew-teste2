import { useState } from 'react';
import { Box, Grid, Paper, Avatar, Typography } from '@mui/material';
import { CustomInput as Input } from '../../components/TextField/Input';
import { CustomButton as Button} from '../../components/Button/Button';
import { useSnackbar  } from 'notistack';

// Icones 
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Cadastro = () => {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const { enqueueSnackbar } = useSnackbar();

    function handleSubmit(e){

        e.preventDefault();

        let novoUsuario = {login, senha, nome} ;
        let usuarios = JSON.parse(localStorage.getItem('@app-users'));
        let novaLista = [...usuarios, novoUsuario];
        localStorage.setItem('@app-users', JSON.stringify(novaLista))
        console.log(localStorage.getItem('@app-users'));
        setLogin('');
        setSenha('');
        setNome('');
        enqueueSnackbar('Usuário Cadastrado', {variant: 'success'})


    }

    return (
        <Grid container component="main" sx={{ height: '90vh' }}>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5"> Cadastrar </Typography>
                    <Box component="form" name='cadastro' noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <Input
                            required
                            id="usuario"
                            label="Usuário"
                            name="usuario"
                            value={login}
                            onChange={(e) => {
                                setLogin(e.target.value)
                            }}
                        />
                        <Input
                            required
                            id="nome"
                            label="Nome"
                            name="nome"
                            value={nome}
                            onChange={(e) => {
                                setNome(e.target.value)
                            }}
                        />
                        <Input
                            required
                            name="senha"
                            label="Senha"
                            type="password"
                            id="senha"
                            value={senha}
                            onChange={(e) => {
                                setSenha(e.target.value)
                            }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Enviar
                        </Button>
                    </Box>
                </Box>
            </Grid>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
        </Grid>
    )
}

export default Cadastro;