import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Box,
    Typography,
    TextField,
    MenuItem,
    Button,
    CircularProgress,
    List,
    ListItem,
    ListItemText,
    Divider,
    FormControl,
    InputLabel,
    Select,
} from '@mui/material';

const API_KEY = 'DGOg0BIAQjm8EO3EkO50txFeLxpklBtotoW9qnHxUzoeecJIlRzOz8CsgNjZ4fyO'; // Replace with your actual TBA API key

function StatsPage() {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [teams, setTeams] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [loadingEvents, setLoadingEvents] = useState(true);
    const [loadingTeams, setLoadingTeams] = useState(false);

    // Fetch events from TBA API
    useEffect(() => {
        const fetchEvents = async () => {
            setLoadingEvents(true);
            try {
                const response = await axios.get('https://www.thebluealliance.com/api/v3/events/2024', {
                    headers: {
                        'X-TBA-Auth-Key': API_KEY, // Add the API key to the request headers
                    },
                });
                setEvents(response.data);
            } catch (error) {
                console.error('Error fetching events:', error);
            } finally {
                setLoadingEvents(false);
            }
        };
        fetchEvents();
    }, []);

    // Fetch teams based on selected event
    useEffect(() => {
        if (!selectedEvent) return;
        const fetchTeams = async () => {
            setLoadingTeams(true);
            try {
                const response = await axios.get(`https://www.thebluealliance.com/api/v3/event/${selectedEvent.key}/teams`, {
                    headers: {
                        'X-TBA-Auth-Key': API_KEY, // Add the API key to the request headers
                    },
                });
                setTeams(response.data);
            } catch (error) {
                console.error('Error fetching teams:', error);
            } finally {
                setLoadingTeams(false);
            }
        };
        fetchTeams();
    }, [selectedEvent]);

    // Handle search query change for events
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Filter events based on search query
    const filteredEvents = events.filter((event) =>
        event.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handle event selection
    const handleEventClick = (event) => {
        setSelectedEvent(event);
        setSelectedTeam(''); // Reset selected team when event changes
    };

    // Handle team selection
    const handleTeamChange = (event) => {
        setSelectedTeam(event.target.value);
    };

    return (
        <Box
            sx={{
                padding: '40px 20px',
                background: 'linear-gradient(135deg, #4a148c, #1a237e)', // Darker background gradient for contrast
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
            }}
        >
            <Typography variant="h3" sx={{ marginBottom: '40px', fontWeight: 'bold' }}>
                FRC Stats & Predictions
            </Typography>

            {/* Search Bar for events */}
            <TextField
                variant="outlined"
                label="Search Events"
                value={searchQuery}
                onChange={handleSearchChange}
                sx={{
                    width: '100%',
                    maxWidth: '500px',
                    marginBottom: '20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Light background with some transparency
                    borderRadius: '8px',
                    '& .MuiInputBase-root': {
                        color: '#212121', // Dark text for visibility
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#3f51b5', // Accent border color
                    },
                }}
            />

            {/* Searchable Event List */}
            {loadingEvents ? (
                <CircularProgress sx={{ marginBottom: '20px', color: 'white' }} />
            ) : (
                <Box sx={{ width: '100%', maxWidth: '500px', marginBottom: '20px' }}>
                    <List sx={{ maxHeight: 300, overflowY: 'auto', borderRadius: '8px', backgroundColor: '#333' }}>
                        {filteredEvents.map((event) => (
                            <ListItem
                                button
                                key={event.key}
                                onClick={() => handleEventClick(event)}
                                sx={{
                                    padding: '10px',
                                    backgroundColor: selectedEvent?.key === event.key ? '#3f51b5' : 'transparent',
                                    color: selectedEvent?.key === event.key ? 'white' : 'inherit',
                                    '&:hover': {
                                        backgroundColor: '#3f51b5',
                                        color: 'white',
                                    },
                                }}
                            >
                                <ListItemText primary={event.name} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            )}

            {/* Event Selected Info */}
            {selectedEvent && (
                <Box sx={{ textAlign: 'center', marginBottom: '30px' }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                        Selected Event: {selectedEvent.name}
                    </Typography>
                    <Typography variant="body1">Event Code: {selectedEvent.key}</Typography>
                </Box>
            )}

            {/* Team Dropdown */}
            {selectedEvent && (
                <Box sx={{ width: '100%', maxWidth: '500px', marginBottom: '20px' }}>
                    <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: '10px' }}>
                        Select a Team
                    </Typography>
                    <FormControl fullWidth sx={{ backgroundColor: '#333', borderRadius: '8px' }}>
                        <InputLabel sx={{ color: '#fff' }}>Team</InputLabel>
                        <Select
                            value={selectedTeam}
                            onChange={handleTeamChange}
                            label="Team"
                            disabled={loadingTeams}
                            sx={{
                                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#3f51b5', // Accent border color
                                },
                            }}
                        >
                            {loadingTeams ? (
                                <MenuItem disabled>
                                    <CircularProgress size={24} sx={{ color: 'black' }} />
                                </MenuItem>
                            ) : (
                                teams.map((team) => (
                                    <MenuItem key={team.team_number} value={team.team_number}>
                                        {team.team_number} - {team.nickname}
                                    </MenuItem>
                                ))
                            )}
                        </Select>
                    </FormControl>
                </Box>
            )}

            {/* Submit Button */}
            <Box sx={{ textAlign: 'center' }}>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#3f51b5',
                        color: 'white',
                        padding: '15px 30px',
                        borderRadius: '50px',
                        fontSize: '18px',
                        '&:hover': {
                            backgroundColor: '#303f9f',
                        },
                    }}
                    disabled={!selectedEvent || !selectedTeam}
                >
                    Get Stats
                </Button>
            </Box>
        </Box>
    );
}

export default StatsPage;
