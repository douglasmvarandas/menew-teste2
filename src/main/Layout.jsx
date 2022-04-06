import { Box } from '@mui/material';
import { CustomMenu as Menu } from '../components/Menu/Menu';

const Layout = ({children}) => {

    return(
        <Box sx={{height: `100%`, width: '100%'}}>
            <header>
                <Menu />
            </header>
            <Box sx={{height: `100%`, width: '100%'}}>
                {children}
            </Box>
        </Box>
    )
}

export default Layout;