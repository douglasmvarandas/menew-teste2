import React from 'react';

import { TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ff4851',
            darker: '#000',
        },
        secondary: {
            main: '#0000FF',
            darker: '#000',
        },
    },
});


const InputComponent = (props) => {
    const { label, type, fullWidth, color, required, inputProps, onChange, value } = props;

    return (
        <ThemeProvider theme={theme}>
            <TextField
                fullWidth={fullWidth}
                required={required}
                label={label}
                type={type}
                color={color}
                inputProps={inputProps}
                onChange={onChange}
                value={value}
            />
        </ThemeProvider>
    );
}

export default InputComponent;