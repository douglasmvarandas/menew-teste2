import React from 'react';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        neutral: {
            main: '#ff4851',
            contrastText: '#ffff',
        },
    },
});


const ButtonComponent = (props) => {
    const { content, color, fullWidth } = props;

    return (
        <ThemeProvider theme={theme}>
            <Button color={color} variant="contained" fullWidth={fullWidth}>
                {content}
            </Button>
        </ThemeProvider>
    );
}

export default ButtonComponent;