import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

function Header() {
    return (
        <AppBar position="sticky" color="inherit" sx={{ boxShadow: 'none' }}>
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{ flexGrow: 1 }}
                    component={Link} // Make the Typography clickable
                    to="/" // Link to the home page
                    style={{ textDecoration: 'none', color: 'inherit' }} // Ensure no default styling is applied to the link
                >
                    AllianceIQ
                </Typography>
                <Button color="inherit" component={Link} to="/contact">
                    Contact
                </Button>
                <Button color="inherit" component={Link} to="/stats">
                    Statistics
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
