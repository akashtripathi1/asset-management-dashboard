import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/pages/Dashboard';
import Assets from './components/pages/Assets';
import Tickets from './components/pages/Tickets';
import './App.css';

function App() {
  return (
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
  );
}

export default App;
