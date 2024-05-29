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

  const combinedActivities = [...assets, ...tickets]
    .sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified))
    .slice(0, 4);

  return (
    <Paper sx={{ padding: 2, mt: 2 }}>
      <Typography variant="h6">Recent Activity</Typography>
      <List>
        {combinedActivities.map((activity, index) => (
          <ListItem key={index}>
            <ListItemText 
              primary={activity.name ? `Asset Updated: ${activity.name}` : `Ticket Raised: ${activity.issueDescription}`}
              secondary={`Status: ${activity.status} | Modified: ${new Date(activity.lastModified).toLocaleString()}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default RecentActivity;
