// src/components/dashboard/OverviewMetrics.js
import React, { useContext, useEffect } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import AssetContext from '../../context/assets/assetContext';
import TicketContext from '../../context/tickets/ticketContext';

const OverviewMetrics = () => {
  const { assets, loadAssets } = useContext(AssetContext);
  const { tickets, loadTickets } = useContext(TicketContext);

  useEffect(() => {
    loadAssets();
    loadTickets();
  }, []);

  const operationalAssets = assets.filter(asset => asset.status === 'Operational').length;
  const underMaintenanceAssets = assets.filter(asset => asset.status === 'Under Maintenance').length;
  const outOfServiceAssets = assets.filter(asset => asset.status === 'Out of Service').length;

  const openTickets = tickets.filter(ticket => ticket.status === 'Open').length;
  const inProgressTickets = tickets.filter(ticket => ticket.status === 'In Progress').length;
  const resolvedTickets = tickets.filter(ticket => ticket.status === 'Resolved').length;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <Paper>
          <Typography variant="h6">Total Assets</Typography>
          <Typography variant="h4">{assets.length}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper>
          <Typography variant="h6">Operational Assets</Typography>
          <Typography variant="h4">{operationalAssets}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper>
          <Typography variant="h6">Under Maintenance</Typography>
          <Typography variant="h4">{underMaintenanceAssets}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper>
          <Typography variant="h6">Out of Service</Typography>
          <Typography variant="h4">{outOfServiceAssets}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper>
          <Typography variant="h6">Total Tickets</Typography>
          <Typography variant="h4">{tickets.length}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper>
          <Typography variant="h6">Open Tickets</Typography>
          <Typography variant="h4">{openTickets}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper>
          <Typography variant="h6">In Progress Tickets</Typography>
          <Typography variant="h4">{inProgressTickets}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper>
          <Typography variant="h6">Resolved Tickets</Typography>
          <Typography variant="h4">{resolvedTickets}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default OverviewMetrics;
