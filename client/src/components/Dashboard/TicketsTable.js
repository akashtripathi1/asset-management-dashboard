// src/components/dashboard/TicketsTable.js
import React, { useContext, useEffect } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import TicketContext from '../../context/tickets/ticketContext';

const TicketsTable = () => {
  const { tickets, loadTickets } = useContext(TicketContext);

  useEffect(() => {
    loadTickets();
  }, []);

  return (
    <TableContainer component={Paper} sx={{ mt: '2' }}>
      <Typography variant="h6" style={{ padding: '2' }}>Tickets Overview</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Ticket ID</TableCell>
            <TableCell>Asset ID</TableCell>
            <TableCell>Issue Description</TableCell>
            <TableCell>Date Raised</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.map(ticket => (
            <TableRow key={ticket.ticketID}>
              <TableCell>{ticket.ticketID}</TableCell>
              <TableCell>{ticket.assetID}</TableCell>
              <TableCell>{ticket.issueDescription}</TableCell>
              <TableCell>{new Date(ticket.dateRaised).toLocaleDateString()}</TableCell>
              <TableCell>{ticket.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TicketsTable;
