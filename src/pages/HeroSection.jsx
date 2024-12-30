import React, { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

function HeroSection() {
    // Load the external script dynamically when the component is mounted
    useEffect(() => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://bringthemhomenow.net/1.1.0/hostages-ticker.js";
        script.setAttribute(
            "integrity",
            "sha384-DHuakkmS4DXvIW79Ttuqjvl95NepBRwfVGx6bmqBJVVwqsosq8hROrydHItKdsne"
        );
        script.setAttribute("crossorigin", "anonymous");
        document.getElementsByTagName("head")[0].appendChild(script);

        // Cleanup the script when the component unmounts
        return () => {
            document.getElementsByTagName("head")[0].removeChild(script);
        };
    }, []);

    return (
        <Box
            sx={{
                background: 'linear-gradient(135deg, #6a1b9a, #101d6b)', // Purple gradient
                color: 'white',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                padding: '0 20px',
            }}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                <Typography variant="h2">Predict the Future of FRC with AllianceIQ</Typography>
                <Typography variant="h5" sx={{ margin: '20px 0' }}>
                    Your ultimate tool for analyzing match outcomes and team rankings in real-time.
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        background: '#3f51b5',
                        color: 'white',
                        padding: '15px 30px',
                        borderRadius: '50px',
                        fontSize: '18px',
                        '&:hover': {
                            background: '#3f51b5',
                        },
                    }}
                >
                    Get Started
                </Button>
            </motion.div>

            {/* Add the external script container */}
            <div id="bthn" lang="en" style={{ marginTop: '20px' }}></div>
        </Box>
    );
}

export default HeroSection;
