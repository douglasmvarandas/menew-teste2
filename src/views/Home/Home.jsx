import { useContext, useEffect } from 'react';
import { Grid, Paper } from '@mui/material';
import {CustomCard as Card} from '../../components/Card/Card';

import { appContext } from '../../main/Context'

const Home = () => {

    const {products, estadoComponente} = useContext(appContext); 

    useEffect(() => {
        console.log(products);
    }, [products])

    if(estadoComponente === 'inicial') {
        return <></>
    } else {

        return (
            <Grid 
                container 
                component="main" 
                direction='row' 
                justifyContent="center" 
                alignItems="center" 
                gap={2}
                sx={{ minHeight: '90vh' }}
            >
                {
                    products?.map((product, i) => {
                        return (
    
                            <Grid item xs={12} sm={3} component={Paper} elevation={6} square key={product.id}>
                                <Card title={product.name} description={product.description} image={product.img} editButton={true} id={product.id} />
                            </Grid>
    
                        )
                    })
                }
            </Grid>
        )
    }
}

export default Home;