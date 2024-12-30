import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#101d6b', // Blue color
        },
        secondary: {
            main: '#6a1b9a', // Purple color
        },
        background: {
            default: '#f5f5f5', // Light gray background
            paper: '#ffffff', // White paper background
        },
    },
    typography: {
        fontFamily: "'Lato', sans-serif", // Updated font family to Lato
        h1: {
            fontWeight: 700,
            fontSize: '3rem',
        },
        h2: {
            fontWeight: 600,
            fontSize: '2.5rem',
        },
        h3: {
            fontWeight: 500,
            fontSize: '2rem',
        },
        h4: {
            fontWeight: 400,
            fontSize: '1.5rem',
        },
        body1: {
            fontSize: '1rem',
        },
    },
});

export default theme;