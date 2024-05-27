// src/components/dashboard/Dashboard.js
import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import OverviewMetrics from './OverviewMetrics';
import RecentActivity from './RecentActivity';
import AssetsTable from './AssetsTable';
import TicketsTable from './TicketsTable';

const Dashboard = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <OverviewMetrics />
        </Grid>
        <Grid item xs={12} md={6}>
          <RecentActivity />
        </Grid>
        <Grid item xs={12}>
          <AssetsTable />
        </Grid>
        <Grid item xs={12}>
          <TicketsTable />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
