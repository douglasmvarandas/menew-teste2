import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#0266B8',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FE5E00',
    },
    background: {
      default: '#E4E4E4',
    },
    text: {
      primary: '#494E52',
    },
  },
});

export default theme;
