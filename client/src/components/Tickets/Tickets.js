import React, { useContext, useEffect, useState } from 'react';
import { Grid, Container, Typography, Button } from '@mui/material';
import TicketContext from '../../context/tickets/ticketContext';
import TicketItem from './TicketItem';
import TicketForm from './TicketForm';

const Tickets = () => {
    const { tickets, loadTickets } = useContext(TicketContext);
    const [open, setOpen] = useState(false);
    const [currentTicket, setCurrentTicket] = useState(null);

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
                    <TicketItem key={ticket.ticketID} ticket={ticket} onUpdate={handleUpdate} />
                ))}
            </Grid>
        </Container>
    );
};

export default Tickets;
