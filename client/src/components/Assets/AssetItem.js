import React from 'react';
import { TableRow, TableCell, IconButton, Collapse, Box, Typography, Button, Table, TableBody, TableContainer, Paper, Chip } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const AssetItem = ({ asset, onUpdate, onDelete }) => {
    const [open, setOpen] = React.useState(false);
    const { motorID, name, description, location, manufacturer, modelNumber, serialNumber, installationDate, lastMaintenanceDate, status, specifications: { power, voltage, current, speed } } = asset;

    const getColor = (status) => {
        switch (status) {
            case 'Operational':
              return { backgroundColor: '#7fd1b9', color: '#ffffff' }; // green
            case 'Under Maintenance':
              return { backgroundColor: '#f4d158', color: '#ffffff' }; // red
            case 'Out of Service':
              return { backgroundColor: '#ff6b6b', color: '#ffffff' }; // orange
            default:
              return { backgroundColor: '#e0e0e0', color: '#000000' }; // grey
          }
    };

    return (
        <React.Fragment>
            <TableRow>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {motorID}
                </TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{description}</TableCell>
                <TableCell>{location}</TableCell>
                <TableCell>
                    <Chip label={status} style={getColor(status)} />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Asset Details
                            </Typography>
                            <TableContainer component={Paper}>
                                <Table size="small" aria-label="asset details">
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Model Number</TableCell>
                                            <TableCell>{modelNumber}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Manufacturer</TableCell>
                                            <TableCell>{manufacturer}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Serial Number</TableCell>
                                            <TableCell>{serialNumber}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Installation Date</TableCell>
                                            <TableCell>{installationDate ? new Date(installationDate).toISOString().split('T')[0] : ''}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Last Maintenance Date</TableCell>
                                            <TableCell>{lastMaintenanceDate ? new Date(lastMaintenanceDate).toISOString().split('T')[0] : ''}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Power</TableCell>
                                            <TableCell>{power} W</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Voltage</TableCell>
                                            <TableCell>{voltage} V</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Current</TableCell>
                                            <TableCell>{current} A</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Speed</TableCell>
                                            <TableCell>{speed} rpm</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <div style={{ display: "flex", gap: "8px" }}>
                                <Button size="small" color="primary" variant="contained" onClick={() => onUpdate(asset)}>
                                    Update
                                </Button>
                                <Button size="small" color="secondary" variant="contained" onClick={() => onDelete(asset)}>
                                    Delete
                                </Button>
                            </div>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
};

export default AssetItem;
