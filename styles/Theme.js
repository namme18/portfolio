import theme from '../Themes/default';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const Theme = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

export default Theme;
