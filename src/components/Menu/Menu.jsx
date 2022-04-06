import { useState, useContext, useEffect } from 'react';
import {CustomLink as Link} from '../Link/Link';
import { AppBar, Box, Toolbar, Typography, } from '@mui/material';
import { appContext } from '../../main/Context'


const CustomMenu = () => {

    const {user, setUser} = useContext(appContext);

    useEffect(() => {

        let token = localStorage.getItem('@app-token')
        setUser(JSON.parse(token));

    },[])

    const links = [
        { name: 'Home', route: '/' },
        { name: 'cadastro', route: '/cadastro' },
        { name: 'Sair', route: '/logout' },
    ]

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Olá, {user?.nome}
                </Typography>
                    {
                        links.map((link, i) => {
                            return (
                                <Link name={link.name} route={link.route} key={i} />
                            )
                        })
                    }
                    
                </Toolbar>
            </AppBar>
        </Box>
        
    )
}

export { CustomMenu };