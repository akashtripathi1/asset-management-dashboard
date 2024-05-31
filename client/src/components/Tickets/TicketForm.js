import React, { useState, useEffect, useContext } from 'react';
import { Modal, Box, Typography, TextField, Button, Grid, Select, MenuItem, InputLabel, FormControl, FormHelperText } from '@mui/material';
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
    const [errors, setErrors] = useState({});
    const [filteredAssets, setFilteredAssets] = useState([]);

    useEffect(() => {
        if (currentTicket) {
            setTicket(currentTicket);
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
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
        setTicket({
            ...ticket,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!ticket.ticketID) newErrors.ticketID = 'Ticket ID is required';
        if (!ticket.assetID) newErrors.assetID = 'Asset ID is required';
        if (!ticket.issueDescription) newErrors.issueDescription = 'Issue Description is required';
        if (!ticket.status) newErrors.status = 'Status is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        if (currentTicket) {
            updateTicket(ticket);
        } else {
            createTicket(ticket);
        }
        handleClose();
    };

    const handleCloseModal = () => {
        setErrors({});
        handleClose();
    };

    return (
        <Modal open={open} onClose={handleCloseModal}>
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
                                disabled={currentTicket ? true : false}
                                error={!!errors.ticketID}
                                helperText={errors.ticketID}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth error={!!errors.assetID}>
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
                                <FormHelperText>{errors.assetID}</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Issue Description"
                                name="issueDescription"
                                value={ticket.issueDescription}
                                onChange={handleChange}
                                fullWidth
                                multiline
                                rows={4}
                                error={!!errors.issueDescription}
                                helperText={errors.issueDescription}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth error={!!errors.status}>
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
                                <FormHelperText>{errors.status}</FormHelperText>
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
