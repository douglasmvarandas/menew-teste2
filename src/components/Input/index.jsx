import React from 'react';

import { TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ff4851',
            darker: '#000',
        },
    },
});


const InputComponent = (props) => {
    const { label, type, fullWidth, color, required, accept } = props;

    return (
        <ThemeProvider theme={theme}>
            <TextField
                fullWidth={fullWidth}
                required={required}
                label={label}
                type={type}
                color={color}
                accept={accept}
            />
        </ThemeProvider>
    );
}

export default InputComponent;