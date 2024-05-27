// src/components/dashboard/RecentActivity.js
import React, { useContext, useEffect } from 'react';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import AssetContext from '../../context/assets/assetContext';
import TicketContext from '../../context/tickets/ticketContext';

const RecentActivity = () => {
  const { assets, loadAssets } = useContext(AssetContext);
  const { tickets, loadTickets } = useContext(TicketContext);

  useEffect(() => {
    loadAssets();
    loadTickets();
  }, []);

  const recentAssets = assets.slice(-5).reverse();
  const recentTickets = tickets.slice(-5).reverse();

  return (
    <Paper style={{ padding: '16px', marginTop: '16px' }}>
      <Typography variant="h6">Recent Activity</Typography>
      <List>
        {recentAssets.map((asset, index) => (
          <ListItem key={index}>
            <ListItemText primary={`Asset Updated: ${asset.name}`} secondary={`Status: ${asset.status}`} />
          </ListItem>
        ))}
        {recentTickets.map((ticket, index) => (
          <ListItem key={index}>
            <ListItemText primary={`Ticket Raised: ${ticket.issueDescription}`} secondary={`Status: ${ticket.status}`} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default RecentActivity;
