import { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Grid, Paper, Avatar, Typography } from '@mui/material';
import { CustomInput as Input } from '../../components/TextField/Input';
import { CustomButton as Button } from '../../components/Button/Button';
import { CustomCard as Card } from '../../components/Card/Card';
import { appContext } from '../../main/Context'


const Edicao = () => {
    
    const { id } = useParams();
    const [title, setTitle] = useState('Café');
    const [description, setDescription] = useState('Café simples');
    const [image, setImage] = useState('./img/tipos-de-cafe.jpg')
    const {products, setProducts} = useContext(appContext);
    const navigate = useNavigate()

    useEffect(() => {
        let produto = products.find(produto => {
            if(produto.id === Number(id)){
                return true;
            } else {
                return false
            }
        })

        setTitle(produto.name);
        setDescription(produto.description);
        setImage(produto.img);
        
    }, [])

    function handleSubmit(e){

        e.preventDefault()

        let produto = products.find(produto => {
            if(produto.id === Number(id)){
                return true;
            } else {
                return false
            }
        })

        produto.name = title;
        produto.description = description;
        produto.img = image;

        setProducts(products);
        navigate('/')

    }
    
    function uploadArquivo(e) {
        let image = e.target.files[0];
        
        let teste = URL.createObjectURL(image)
        setImage(teste)
        console.log(teste);

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
                    <Typography component="h1" variant="h5"> Editar Item </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <Input
                            required
                            id="titulo"
                            label="Título"
                            name="titulo"
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                        />
                        <Input
                            required
                            name="descricao"
                            label="Descrição"
                            id="descricao"
                            type="text"
                            value={description}
                            multiline
                            rows={4}
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}

                        />
                        
                        <Grid container component='div' spacing={2}>
                            <Grid item sx={12} md={6}>
                                <label htmlFor='image'>
                                    <Input 
                                        sx={{display: 'none'}}  
                                        type="file" 
                                        id='image' 
                                        name='image'
                                        accept="image/*"
                                        onChange={e => { uploadArquivo(e)}}
                                    />
                                    <Button component="span" fullWidth sx={{pr:1}}>Upload Imagem</Button>
                                </label>
                            </Grid>
                            <Grid item sx={12} md={6} >
                                <Button type="submit" fullWidth>Enviar</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={7}>
                <Grid container justifyContent="center" alignItems="center" sx={{height: '100%'}}>
                    <Grid item md={4}>
                        <Card title={title} description={description} image={image} sx={{maxWidth: 300}} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Edicao;
