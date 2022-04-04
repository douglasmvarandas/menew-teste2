import React from 'react';

import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        neutral: {
            main: '#ff4851',
            contrastText: '#ffff',
        },
        save: {
            main: 'green',
            contrastText: '#ffff',
        },
        cancel: {
            main: '#CACBCD',
            contrastText: '#ffff',
        },
    },
});


const ButtonComponent = (props) => {
    const { content, color, fullWidth, type, onClick } = props;

    return (
        <ThemeProvider theme={theme}>
            <Button color={color} variant="contained" fullWidth={fullWidth} type={type} onClick={onClick}>
                {content}
            </Button>
        </ThemeProvider>
    );
}

export default ButtonComponent;