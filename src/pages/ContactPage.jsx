import React from 'react';
import { Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(to right, #101d6b, #6a1b9a)', // Gradient background
        color: '#fff',
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    container: {
        background: '#fff',
        padding: theme.spacing(4),
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: 800,
        margin: '0 auto',
    },
    title: {
        marginBottom: theme.spacing(2),
        fontWeight: 'bold',
        fontSize: '2.5rem',
        color: '#333',
        textAlign: 'center',
    },
    textField: {
        marginBottom: theme.spacing(2),
        '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            backgroundColor: '#f5f5f5',
        },
    },
    button: {
        background: 'linear-gradient(45deg, #6a1b9a, #8e24aa)', // Purple gradient
        '&:hover': {
            background: 'linear-gradient(45deg, #9c27b0, #ba68c8)', // Lighter purple gradient on hover
        },
        padding: theme.spacing(1, 4),
        borderRadius: '30px',
        fontWeight: 'bold',
    },
    formSection: {
        paddingTop: theme.spacing(2),
    },
    subtitle: {
        color: '#aaa',
        fontSize: '1.1rem',
        textAlign: 'center',
        marginBottom: theme.spacing(3),
    },
    gridContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(4),
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
    },
}));

function ContactPage() {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="false">
            <Paper className={classes.container}>
                <Typography variant="h4" className={classes.title}>
                    Get in Touch
                </Typography>
                <Typography variant="body1" className={classes.subtitle}>
                    Have any questions or feedback? Feel free to reach out to us, and we'll get back to you as soon as possible.
                </Typography>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Name"
                            variant="outlined"
                            required
                            className={classes.textField}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            required
                            type="email"
                            className={classes.textField}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Message"
                            variant="outlined"
                            multiline
                            rows={4}
                            required
                            className={classes.textField}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" className={classes.button}>
                            Send Message
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default ContactPage;
