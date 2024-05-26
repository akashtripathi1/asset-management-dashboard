import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Divider } from '@mui/material';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import InventoryIcon from '@mui/icons-material/Inventory';
// import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Navbar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Divider />
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon>
            {/* <DashboardIcon /> */}
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/assets">
          <ListItemIcon>
            {/* <InventoryIcon /> */}
          </ListItemIcon>
          <ListItemText primary="Assets" />
        </ListItem>
        <ListItem button component={Link} to="/tickets">
          <ListItemIcon>
            {/* <AssignmentIcon /> */}
          </ListItemIcon>
          <ListItemText primary="Tickets" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Navbar;
