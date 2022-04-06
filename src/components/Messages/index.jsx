import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Message(props) {
    const { open, setOpen, content, severity, callback } = props;

    const close = () => {
        if (callback) {
            callback();
        }
        setOpen(false);
    };


    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={open} autoHideDuration={2000} onClose={close}>
                <Alert onClose={close} severity={severity} sx={{ width: '100%' }}>
                    {content}
                </Alert>
            </Snackbar>
        </Stack>
    );
}
