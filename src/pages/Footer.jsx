import React from 'react';
import { Box, Typography, IconButton, Grid, Link, Container } from '@mui/material';
import {
    Facebook,
    GitHub,
    Instagram,
    LinkedIn,
    Mail,
    YouTube,
} from '@mui/icons-material';

function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: '#212121',
                color: 'white',
                padding: '60px 0',
                textAlign: 'center',
                borderTop: '1px solid #3f51b5',
            }}
        >
            <Container>
                {/* Footer Text Section */}
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} sm={4} md={3}>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            © 2024 AllianceIQ
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            All rights reserved.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            Powered by{' '}
                            <Link
                                href="https://www.thebluealliance.com"
                                color="inherit"
                                target="_blank"
                                sx={{
                                    textDecoration: 'underline',
                                    '&:hover': {
                                        color: '#3f51b5',
                                    },
                                }}
                            >
                                The Blue Alliance
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>

                {/* Social Media Icons */}
                <Box sx={{ mb: 3 }}>
                    <IconButton
                        color="inherit"
                        href="https://github.com"
                        sx={{
                            mx: 1,
                            '&:hover': { color: '#3f51b5' },
                        }}
                    >
                        <GitHub />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="https://linkedin.com"
                        sx={{
                            mx: 1,
                            '&:hover': { color: '#3f51b5' },
                        }}
                    >
                        <LinkedIn />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="mailto:contact@example.com"
                        sx={{
                            mx: 1,
                            '&:hover': { color: '#3f51b5' },
                        }}
                    >
                        <Mail />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="https://instagram.com"
                        sx={{
                            mx: 1,
                            '&:hover': { color: '#3f51b5' },
                        }}
                    >
                        <Instagram />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="https://youtube.com"
                        sx={{
                            mx: 1,
                            '&:hover': { color: '#3f51b5' },
                        }}
                    >
                        <YouTube />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="https://facebook.com"
                        sx={{
                            mx: 1,
                            '&:hover': { color: '#3f51b5' },
                        }}
                    >
                        <Facebook />
                    </IconButton>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;
