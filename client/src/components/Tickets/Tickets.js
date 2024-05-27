import React, { useContext, useEffect, useState } from 'react';
import { Grid, Container, Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import TicketContext from '../../context/tickets/ticketContext';
import TicketItem from './TicketItem';
import TicketForm from './TicketForm';

const Tickets = () => {
    const { tickets, loadTickets, deleteTicket } = useContext(TicketContext);
    const [open, setOpen] = useState(false);
    const [currentTicket, setCurrentTicket] = useState(null);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [ticketToDelete, setTicketToDelete] = useState(null);

    useEffect(() => {
        loadTickets();
    }, []);

    const handleOpen = () => {
        setCurrentTicket(null);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUpdate = (ticket) => {
        setCurrentTicket(ticket);
        setOpen(true);
    };

    const handleDelete = (ticket) => {
        setTicketToDelete(ticket);
        setDeleteOpen(true);
    };

    const handleConfirmDelete = () => {
        deleteTicket(ticketToDelete.ticketID);
        setDeleteOpen(false);
    };

    const handleCancelDelete = () => {
        setDeleteOpen(false);
    };

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Tickets
            </Typography>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Add Ticket
            </Button>
            <TicketForm open={open} handleClose={handleClose} currentTicket={currentTicket} />
            <Grid container spacing={3}>
                {tickets.map((ticket) => (
                    <TicketItem key={ticket.ticketID} ticket={ticket} onUpdate={handleUpdate} onDelete={handleDelete} />
                ))}
            </Grid>
            <Dialog open={deleteOpen} onClose={handleCancelDelete}>
                <DialogTitle>Confirm Deletion</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this ticket?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancelDelete} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirmDelete} color="secondary">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default Tickets;
