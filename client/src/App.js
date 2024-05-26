import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Assets from './components/Assets/Assets';
import Tickets from './components/Tickets/Tickets';
import AssetState from './context/assets/AssetState';
import TicketState from './context/tickets/TicketState';
import './App.css';

function App() {
  return (
    <AssetState>
      <TicketState>


        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Router>
            <Navbar />
            <Box
              component="main"
              sx={{ flexGrow: 1, p: 3 }}
            >
              <Routes>
                <Route exact path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/assets" element={<Assets />} />
                <Route path="/tickets" element={<Tickets />} />
              </Routes>
            </Box>
          </Router>
        </Box>
      </TicketState>
    </AssetState>
  );
}

export default App;
