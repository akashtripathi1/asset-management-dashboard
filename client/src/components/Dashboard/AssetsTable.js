import React, { useContext, useEffect } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import AssetContext from '../../context/assets/assetContext';

const AssetsTable = () => {
  const { assets, loadAssets } = useContext(AssetContext);

  useEffect(() => {
    loadAssets();
  }, []);

  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Typography variant="h6" sx={{ padding: 2 }}>Assets Details</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Motor ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Last Maintenance Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assets.map(asset => (
            <TableRow key={asset.motorID}>
              <TableCell>{asset.motorID}</TableCell>
              <TableCell>{asset.name}</TableCell>
              <TableCell>{asset.location}</TableCell>
              <TableCell>{asset.status}</TableCell>
              <TableCell>{new Date(asset.lastMaintenanceDate).toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AssetsTable;
