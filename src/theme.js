import { createTheme, responsiveFontSizes } from '@mui/material';

export const theme = responsiveFontSizes(
    createTheme({
        palette: {
            primary: {
                main: '#4257BE',
            },
        },
        components: {
            MuiPaper: {
                styleOverrides: {
                    root: {
                        borderRadius: '10px',
                    },
                },
            },
        },
    }),
);
