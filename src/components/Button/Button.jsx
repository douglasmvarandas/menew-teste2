import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const CustomButton = (props) => {

    return (
        <Button variant="contained" {...props} >{props.children}</Button>
    )
}


export {CustomButton};