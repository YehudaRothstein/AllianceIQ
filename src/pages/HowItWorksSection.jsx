import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';

function HowItWorksSection() {
    return (
        <Container sx={{ padding: '50px 0' }}>
            <Typography variant="h4" align="center" sx={{ marginBottom: 4 }}>
                How AllianceIQ Works
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h6">Step 1: Data Collection</Typography>
                        <Typography>
                            AllianceIQ gathers data from previous FRC events, team statistics, and match outcomes.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h6">Step 2: Model Training</Typography>
                        <Typography>
                            Using machine learning algorithms, AllianceIQ analyzes team performance, robot characteristics, and strategies.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h6">Step 3: Match Prediction</Typography>
                        <Typography>
                            Our AI predicts match outcomes, ranking teams based on past performances and strategies.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h6">Step 4: Insights & Reports</Typography>
                        <Typography>
                            View detailed reports and insights to make data-driven decisions during FRC events.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default HowItWorksSection;
