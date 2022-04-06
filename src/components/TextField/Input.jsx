import { TextField  } from '@mui/material';
import PropTypes from 'prop-types';

const CustomInput = (props) => {

    return (
        <TextField
            margin="normal"
            fullWidth
            autoFocus
            variant='outlined'
            {...props}
        />
    )
}

// CustomTextField.propTypes = {
    
// }

export { CustomInput };