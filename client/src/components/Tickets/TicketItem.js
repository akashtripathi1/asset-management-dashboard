import React from 'react';
import { TableRow, TableCell, IconButton, Collapse, Box, Typography, Button, Table, TableBody, TableContainer, Paper, Chip } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const TicketItem = ({ ticket, onUpdate, onDelete }) => {
    const [open, setOpen] = React.useState(false);
    const { ticketID, assetID, issueDescription, dateRaised, status } = ticket;

    const getColor = (status) => {
        switch (status) {
            case 'Open':
              return { backgroundColor: '#7c5ffa', color: '#ffffff' }; // green
            case 'Resolved':
              return { backgroundColor: '#7fd1b9', color: '#ffffff' }; // red
            case 'In Progress':
              return { backgroundColor: '#f4d158', color: '#ffffff' }; // orange
            default:
              return { backgroundColor: '#e0e0e0', color: '#000000' }; // grey
          }
    };

    return (
        <React.Fragment>
            <TableRow>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {ticketID}
                </TableCell>
                <TableCell>{assetID}</TableCell>
                <TableCell>{issueDescription}</TableCell>
                <TableCell>{dateRaised ? new Date(dateRaised).toISOString().split('T')[0] : ''}</TableCell>
                <TableCell>
                    <Chip label={status} style={getColor(status)} />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Ticket Details
                            </Typography>
                            <TableContainer component={Paper}>
                                <Table size="small" aria-label="ticket details">
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Ticket ID</TableCell>
                                            <TableCell>{ticketID}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Asset ID</TableCell>
                                            <TableCell>{assetID}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Issue Description</TableCell>
                                            <TableCell>{issueDescription}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Date Raised</TableCell>
                                            <TableCell>{dateRaised ? new Date(dateRaised).toISOString().split('T')[0] : ''}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Status</TableCell>
                                            <TableCell>{status}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <div style={{ display: "flex", gap: "8px" }}>
                                <Button size="small" color="primary" variant="contained" onClick={() => onUpdate(ticket)}>
                                    Update
                                </Button>
                                <Button size="small" color="secondary" variant="contained" onClick={() => onDelete(ticket)}>
                                    Delete
                                </Button>
                            </div>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
};

export default TicketItem;
