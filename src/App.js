import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { motion } from 'framer-motion';

import Header from './pages/Header';
import HeroSection from './pages/HeroSection';
import FeaturesSection from './pages/FeaturesSection';
import HowItWorksSection from './pages/HowItWorksSection';
import CallToAction from './pages/CallToAction';
import Footer from './pages/Footer';
import StatsPage from './pages/StatsPage';  // Import the new StatsPage component
import theme from './theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <HeroSection />
                                <FeaturesSection />
                                <HowItWorksSection />
                                <CallToAction />
                                <Footer />
                            </motion.div>
                        }
                    />
                    <Route path="/stats" element={<StatsPage />} /> {/* Add the new stats route */}
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
