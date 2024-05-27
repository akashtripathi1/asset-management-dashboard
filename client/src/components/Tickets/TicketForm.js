import React, { useState, useEffect, useContext } from 'react';
import { Modal, Box, Typography, TextField, Button, Grid, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import TicketContext from '../../context/tickets/ticketContext';
import AssetContext from '../../context/assets/assetContext';

const TicketForm = ({ open, handleClose, currentTicket }) => {
    const { createTicket, updateTicket } = useContext(TicketContext);
    const { assets } = useContext(AssetContext);
    const [ticket, setTicket] = useState({
        ticketID: '',
        assetID: '',
        issueDescription: '',
        status: '',
    });
    const [filteredAssets, setFilteredAssets] = useState([]);

    useEffect(() => {
        if (currentTicket) {
            setTicket({
                ticketID: currentTicket.ticketID,
                assetID: currentTicket.assetID,
                issueDescription: currentTicket.issueDescription,
                status: currentTicket.status,
            });
        } else {
            setTicket({
                ticketID: '',
                assetID: '',
                issueDescription: '',
                status: '',
            });
        }
    }, [currentTicket]);

    useEffect(() => {
        setFilteredAssets(assets);
    }, [assets]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTicket({
            ...ticket,
            [name]: value,
        });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedTicket = {
            ...ticket,
            dateRaised: new Date().toISOString(),
        };
        if (currentTicket) {
            updateTicket(updatedTicket);
        } else {
            createTicket(updatedTicket);
        }
        handleClose();
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)', 
                width: '90%', 
                maxWidth: 600, 
                maxHeight: '90%', 
                bgcolor: 'background.paper', 
                p: 4, 
                boxShadow: 24, 
                borderRadius: 2, 
                overflowY: 'auto',
                height: currentTicket ? 'auto' : 'fit-content',
            }}>
                <Typography variant="h6" component="h2" gutterBottom>
                    {currentTicket ? 'Update Ticket' : 'Add New Ticket'}
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Ticket ID"
                                name="ticketID"
                                value={ticket.ticketID}
                                onChange={handleChange}
                                fullWidth
                                required
                                disabled={currentTicket ? true : false}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth required>
                                <InputLabel>Asset ID</InputLabel>
                                <Select
                                    label="Asset ID"
                                    name="assetID"
                                    value={ticket.assetID}
                                    onChange={handleChange}
                                    fullWidth
                                    renderValue={(selected) => selected}
                                    MenuProps={{
                                        PaperProps: {
                                            style: {
                                                maxHeight: 200,
                                            },
                                        },
                                    }}
                                >
                                    {filteredAssets.map(asset => (
                                        <MenuItem key={asset.motorID} value={asset.motorID}>
                                            {asset.motorID}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Issue Description"
                                name="issueDescription"
                                value={ticket.issueDescription}
                                onChange={handleChange}
                                fullWidth
                                required
                                multiline
                                rows={4}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth required>
                                <InputLabel>Status</InputLabel>
                                <Select
                                    label="Status"
                                    name="status"
                                    value={ticket.status}
                                    onChange={handleChange}
                                    fullWidth
                                >
                                    <MenuItem value="Open">Open</MenuItem>
                                    <MenuItem value="In Progress">In Progress</MenuItem>
                                    <MenuItem value="Resolved">Resolved</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                {currentTicket ? 'Update Ticket' : 'Add Ticket'}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Modal>
    );
};

export default TicketForm;
