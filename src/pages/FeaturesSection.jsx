import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';

function FeatureCard({ icon, title, description }) {
    return (
        <Box
            sx={{
                background: '#ffffff',
                borderRadius: '10px',
                padding: '20px',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.2)',
                },
            }}
        >
            <Box sx={{ fontSize: '40px', marginBottom: '10px' }}>{icon}</Box>
            <Typography variant="h6">{title}</Typography>
            <Typography>{description}</Typography>
        </Box>
    );
}

function FeaturesSection() {
    return (
        <Container sx={{ padding: '50px 0' }}>
            <Typography variant="h4" align="center" sx={{ marginBottom: 4 }}>
                Key Features of AllianceIQ
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={6} md={3}>
                    <FeatureCard icon="📊" title="Match Prediction" description="Predict match outcomes using real-time data analysis." />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <FeatureCard icon="🏆" title="Rankings & Insights" description="View detailed team rankings and performance insights." />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <FeatureCard icon="📈" title="Data Visualization" description="Interactive charts to visualize team metrics and trends." />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <FeatureCard icon="📑" title="Customizable Reports" description="Create tailored reports based on match data." />
                </Grid>
            </Grid>
        </Container>
    );
}

export default FeaturesSection;
