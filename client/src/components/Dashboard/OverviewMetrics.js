import React, { useContext, useEffect } from 'react';
import { Grid } from '@mui/material';
import AssetContext from '../../context/assets/assetContext';
import TicketContext from '../../context/tickets/ticketContext';
import DashboardCard from './DashboardCard';

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
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
        <DashboardCard
          title="Total Assets"
          totalValue={assets.length}
          items={[
            { label: 'Operational', value: operationalAssets, color: 'operational' },
            { label: 'Under Maintenance', value: underMaintenanceAssets, color: 'underMaintenance' },
            { label: 'Out of Service', value: outOfServiceAssets, color: 'outOfService' },
          ]}
        />
      </Grid>
      <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
        <DashboardCard
          title="Total Tickets"
          totalValue={tickets.length}
          items={[
            { label: 'Open', value: openTickets, color: 'open' },
            { label: 'In Progress', value: inProgressTickets, color: 'inProgress' },
            { label: 'Resolved', value: resolvedTickets, color: 'resolved' },
          ]}
        />
      </Grid>
    </Grid>
  );
};

export default OverviewMetrics;
