import React, { useContext } from 'react';
import { Card, CardContent, CardActions, Button, Typography, Grid } from '@mui/material';
import TicketContext from '../../context/tickets/ticketContext';

const TicketItem = ({ ticket, onUpdate }) => {
    const { deleteTicket } = useContext(TicketContext);
    const { ticketID, assetID, issueDescription, dateRaised, status } = ticket;

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Ticket ID: {ticketID}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Asset ID: {assetID}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Issue Description: {issueDescription}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Date Raised: {dateRaised}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Status: {status}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => onUpdate(ticket)}>
                        Update
                    </Button>
                    <Button size="small" color="secondary" onClick={() => deleteTicket(ticketID)}>
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default TicketItem;
