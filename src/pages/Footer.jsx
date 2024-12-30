import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import {
    Facebook,
    GitHub,
    Google,
    Instagram,
    LinkedIn,
    Mail,
    NoEncryptionGmailerrorred,
    YouTube
} from '@mui/icons-material';

function Footer() {
    return (
        <Box sx={{ backgroundColor: '#212121', color: 'white', padding: '20px 0', textAlign: 'center' }}>
            <Typography variant="body2">© 2024 AllianceIQ All rights reserved.</Typography>
            <Box>
                <IconButton color="inherit" href="https://github.com">
                    <GitHub />
                </IconButton>
                <IconButton color="inherit" href="https://linkedin.com">
                    <LinkedIn />
                </IconButton>
                <IconButton color="inherit" href="https://linkedin.com">
                    <Mail />
                </IconButton>
                <IconButton color="inherit" href="https://linkedin.com">
                    <Instagram />
                </IconButton>
                <IconButton color="inherit" href="https://linkedin.com">
                    <YouTube />
                </IconButton>
                <IconButton color="inherit" href="https://linkedin.com">
                    <Facebook />
                </IconButton>
            </Box>
        </Box>
    );
}

export default Footer;
