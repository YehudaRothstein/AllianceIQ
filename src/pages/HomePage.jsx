import React from 'react';
import { Box, Typography, Grid, Paper, Button, Container, IconButton, Fade } from '@mui/material';
import {TrendingUp, EmojiEvents, AccessAlarm, LinkedIn, GitHub} from '@mui/icons-material';

// Hero Section
const HeroSection = () => (
    <Box sx={{
        backgroundColor: 'secondary.main',
        color: 'common.white',
        padding: '120px 0',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(45deg, #FF4081, #FF80AB)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottom: '4px solid #FF4081',
        position: 'relative',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
        animation: 'fadeIn 2s ease-out',
    }}>
        <Typography variant="h1" sx={{ fontWeight: 700 }} gutterBottom>
            Welcome to AllianceIQ
        </Typography>
        <Typography variant="h2" sx={{ marginBottom: 3 }}>
            Unlock Data and Predict FRC Team Success
        </Typography>
        <Button variant="contained" color="secondary" size="large" sx={{
            marginTop: 4,
            transition: 'all 0.3s ease',
            '&:hover': {
                transform: 'scale(1.1)',
                backgroundColor: '#FF80AB',
            }
        }}>
            Get Started
        </Button>
    </Box>
);

// Features Section
const FeaturesSection = () => (
    <Container sx={{ marginTop: 8 }}>
        <Typography variant="h2" sx={{ fontWeight: 700, textAlign: 'center' }} gutterBottom>
            Key Features
        </Typography>
        <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
                <Paper sx={{
                    padding: 4,
                    textAlign: 'center',
                    backgroundColor: 'common.white',
                    boxShadow: 5,
                    borderRadius: '8px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
                    },
                    animation: 'slideIn 1s ease-out',
                }}>
                    <TrendingUp fontSize="large" color="primary" />
                    <Typography variant="h6" sx={{ marginTop: 2 }}>
                        Predictive Analytics
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: 1 }}>
                        Use historical data to predict match outcomes with high accuracy.
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper sx={{
                    padding: 4,
                    textAlign: 'center',
                    backgroundColor: 'common.white',
                    boxShadow: 5,
                    borderRadius: '8px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
                    },
                    animation: 'slideIn 1.2s ease-out',
                }}>
                    <EmojiEvents fontSize="large" color="primary" />
                    <Typography variant="h6" sx={{ marginTop: 2 }}>
                        Team Rankings
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: 1 }}>
                        View real-time rankings and performance analysis for all teams.
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper sx={{
                    padding: 4,
                    textAlign: 'center',
                    backgroundColor: 'common.white',
                    boxShadow: 5,
                    borderRadius: '8px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
                    },
                    animation: 'slideIn 1.4s ease-out',
                }}>
                    <AccessAlarm fontSize="large" color="primary" />
                    <Typography variant="h6" sx={{ marginTop: 2 }}>
                        Upcoming Events
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: 1 }}>
                        Stay up to date with all the upcoming matches and events.
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    </Container>
);

// Footer Section with Social Media Links
const Footer = () => (
    <Box sx={{
        backgroundColor: 'primary.main',
        color: 'common.white',
        padding: 4,
        marginTop: 6,
        textAlign: 'center',
        boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)',
        animation: 'fadeIn 2s ease-out',
    }}>
        <Typography variant="body2">
            © 2024 AllianceIQ. All Rights Reserved.
        </Typography>
        <div sx={{ marginTop: 2 }}>
            <IconButton color="inherit" href="https://github.com" target="_blank">
                <GitHub />
            </IconButton>
            <IconButton color="inherit" href="https://linkedin.com" target="_blank">
                <LinkedIn />
            </IconButton>
        </div>
    </Box>
);

// HomePage Component
const HomePage = () => {
    return (
        <Box>
            <HeroSection />
            <FeaturesSection />
            <Footer />
        </Box>
    );
};

export default HomePage;
