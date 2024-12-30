// src/pages/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

function Header() {
    return (
        <AppBar position="sticky" color='inherit' sx={{ boxShadow: 'none' }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    AllianceIQ
                </Typography>
                <Button color="inherit" component={Link} to="/">
                    Home
                </Button>
                <Button color="inherit" component={Link} to="/stats"> {/* Contact link */}
                    Statistics
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
