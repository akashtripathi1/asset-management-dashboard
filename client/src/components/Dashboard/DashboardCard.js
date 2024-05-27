// src/components/dashboard/DashboardCard.js
import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';

Chart.register(ArcElement);

const DashboardCard = ({ title, totalValue, items }) => {
  const colors = {
    operational: '#7fd1b9',
    underMaintenance: '#f4d158',
    outOfService: '#ff6b6b',
    open: '#7c5ffa',
    inProgress: '#f4d158',
    resolved: '#7fd1b9',
  };

  const data = {
    labels: items.map(item => item.label),
    datasets: [{
      data: items.map(item => item.value),
      backgroundColor: items.map(item => colors[item.color]),
      hoverOffset: 4,
      cutout: '70%',
    }],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <Paper sx={{
      padding: 3,
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
      backgroundColor: '#fff',
    }}>
      <Typography variant="h6" component="div" sx={{
        mb: 2,
        textAlign: 'left',
        color: '#2e2e2e',
      }}>
        {title}
      </Typography>
      <Box display="flex" alignItems="center"
        justifyContent="center" minHeight={150}
        position="relative" sx={{ mb: 2 }}
      >
        <Doughnut data={data} options={options} />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          <Typography variant="caption" component="div" sx={{ color: '#5f6368' }}>
            Total
          </Typography>
          <Typography variant="h6" component="div" sx={{ color: '#2e2e2e' }}>
            {totalValue}
          </Typography>
        </Box>
      </Box>
      {items.map((item, index) => (
        <Box key={index} sx={{
          display: 'flex',
          alignItems: 'center',
          paddingY: '8px',
          position: 'relative',
          borderRadius: '12px',
          overflow: 'hidden',
          mb: '8px',
          backgroundColor: '#f5f5f5'
        }}>
          <Box sx={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            background: `linear-gradient(to right, #f5f5f5 0%, ${colors[item.color]} 100%)`
          }} />
          <Typography variant="body2" component="div" sx={{
            pl: '16px',
            zIndex: 1,
            color: '#0f0d0e',
          }}>
            {item.label}
          </Typography>
          <Typography variant="body2" component="div" sx={{
            position: 'absolute',
            right: '16px',
            zIndex: 1,
            color: '#0f0d0e',
          }}>
            {item.value}
          </Typography>
        </Box>
      ))}
    </Paper>
  );
};

export default DashboardCard;
