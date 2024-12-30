import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

function CallToAction() {
    return (
        <Box sx={{ background: 'linear-gradient(135deg, #3f51b5, #6a1b9a)', padding: '50px 0' }}>
            <Container sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ color: 'white', marginBottom: 2 }}>
                    Have any questions? Get in touch with us today.
                </Typography>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                    <Button
                        variant="contained"
                        sx={{
                            background: 'linear-gradient(135deg, #6a1b9a, #3f51b5)',
                            color: 'white',
                            padding: '15px 30px',
                            borderRadius: '50px',
                            fontSize: '18px',
                            '&:hover': {
                                background: 'linear-gradient(135deg, #3f51b5, #6a1b9a)',
                            },
                        }}
                    >
                        Contact Us
                    </Button>
                </Link>
            </Container>
        </Box>
    );
}

export default CallToAction;
